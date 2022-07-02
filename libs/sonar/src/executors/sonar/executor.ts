import type { ExecutorContext } from '@nrwl/devkit';
import { exec } from 'child_process';
import { promisify } from 'util';

export interface Project {
  settings: string;
}

export interface SonarExecutorOptions {
  project : {
    settings: string;
  },
  sonar : {
    host: {
      url: string;
    }
    projectKey: string;
    projectName: string;
    projectVersion: string;
    login: string;
    password: string;
    ws: {
      timeout: string;
    }
    projectDescription: string;
    links: {
      homepage: string;
      ci: string;
      issue: string;
      scm: string;
    }
    sources: string;
    tests: string;
    sourceEncoding: string;
    externalIssuesReportPaths: string;
    projectDate: string;
    projectBaseDir: string;
    working: {
      directory: string;
    }
    scm: {
      provider: string;
      forceReloadAll: string;
      exclusions: {
        disabled: string;
      }
      revision: string;
    }
    buildString: string;
    analysis: any
    newCode: {
      referenceBranch: string;
    }
    // sonar.cpd.${language}.minimumtokens	
    // sonar.cpd.${language}.minimumLines
    log: {
      level: string;
    }	
    verbose: string;
    scanner: {
      dumpToFile: string;
      metadataFilePath: string;
    }
    qualitygate: {
      wait: string;
      timeout: string;
    }
  }
}


export default async function sonarExecutor(
  options: SonarExecutorOptions,
  context: ExecutorContext
): Promise<{ success: boolean }> {
  console.info(`Executing "sonar-scanner"...`);
  console.info(`Options: ${JSON.stringify(options, null, 2)}`);
  
  const args: string[] = [];
  getPaths(options).map((path) => {
    args.push(`-D${path}=${getValue(options, path)}`);
  });

  const { stdout, stderr } = await promisify(exec)(
    `sonar-scanner ${args.join(' ')}`
  );

  console.log(stdout);
  console.error(stderr);

  const success = !stderr;
  return { success };
}

// get paths to all nested keys in an object where the value is a string
function getPaths(obj: any, path: string[] = []): string[] {
  const paths: string[] = [];
  Object.keys(obj).map((key) => {
    if (typeof obj[key] === 'string') {
      paths.push(path.concat(key).join('.'));
    } else if (typeof obj[key] === 'object') {
      getPaths(obj[key], path.concat(key)).map((p) => {
        paths.push(p);
      })
    }
  })
  return paths;
}

// Get value of a key in an object
function getValue(obj: any, path: string): any {
  return obj[path];
}
