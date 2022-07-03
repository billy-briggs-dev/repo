import type { ExecutorContext } from '@nrwl/devkit';
import { exec } from 'child_process';
import { promisify } from 'util';
import { SonarExecutorOptions } from './schema';

export default async function sonarExecutor(
  options: SonarExecutorOptions,
  _context: ExecutorContext
): Promise<{ success: boolean }> {  
  if (!options?.project?.settings) {
    if (!options?.sonar?.projectKey) {
      throw new Error('Project Key is required! Please provide a project key in the sonar properties file or in the project.json.');
    }

    if(!options?.sonar?.host?.url) {
      throw new Error('Host Url is required! Please provide a host url in the sonar properties file or in the project.json.');
    }
  }

  const args: string[] = [];
  getPathsAsStringArray(options).map((path) => {
    args.push(`-D${path.join('.')}=${getValueByPath(options, path)}`);
  });

  console.info(`Executing "sonar-scanner"...`);
  console.info(`Options: ${JSON.stringify(options, null, 2)}`);
  const { stdout, stderr } = await promisify(exec)(
    `sonar-scanner ${args.join(' ')}`
  );

  console.log(stdout);
  console.error(stderr);

  const success = !stderr;
  return { success };
}

// Get all paths as a string array in a nested object
function getPathsAsStringArray(obj: any): string[][] {
  const paths: string[][] = [];
  Object.keys(obj).map((key) => {
    if (typeof obj[key] === 'string') {
      paths.push([key]);
    } else if (typeof obj[key] === 'object') {
      getPathsAsStringArray(obj[key]).map((p) => {
        paths.push([key, ...p]);
      })
    }
  })
  return paths;
}

// Get nested value from object
function getValueByPath(obj: any, path: string[]): string {
  return path.reduce((o, k) => o[k], obj);
}