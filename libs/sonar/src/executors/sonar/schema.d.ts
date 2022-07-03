export interface Project {
    settings: string;
}
  
export interface Project {
    settings: string;
}

export interface Host {
    url: string;
}

export interface WS {
    timeout: string;
}

export interface Links {
    homepage: string;
    ci: string;
    scm: string;
}

export interface Working {
    directory: string;
}

export interface SCM {
    provider: string;
    forceReloadAll: string;
    exclusions: {
        disabled: string;
    }
    revision: string;
}

export interface NewCode {
    referenceBranch: string;
}

export interface Log {
    level: string;
}	

export interface Scanner  {
    dumpToFile: string;
    metadataFilePath: string;
}

export interface QualityGate {
    wait: string;
    timeout: string;
}

export interface Sonar {
    host: Host;
    projectKey: string;
    projectName: string;
    projectVersion: string;
    login: string;
    password: string;
    ws: WS;
    projectDescription: string;
    links: Links;
    sources: string;
    tests: string;
    sourceEncoding: string;
    externalIssuesReportPaths: string;
    projectDate: string;
    projectBaseDir: string;
    working: Working;
    scm: SCM;
    buildString: string;
    analysis: any
    newCode: NewCode;
    // sonar.cpd.${language}.minimumtokens	
    // sonar.cpd.${language}.minimumLines
    log: Log;
    verbose: string;
    scanner: Scanner;
    qualitygate: QualityGate;
}

export interface SonarExecutorOptions {
    project: Project;
    sonar: Sonar;
}
