# Sonar Nx

Created by Billy Briggs

This project adds native support for the Sonar Scanner to Nx.

This project has yet to be fully tested. Report any bugs if found.

## Requirements

- Sonar Scanner binary installed in your Shell environment

## Getting Started

It is suggested that you follow the given format of creating a `sonar-project.properties` file at the root of your project.
This will consolidate the properties values into a given file and is easier to maintain.

```json
    //project.json
    ...
    "sonar": {
      "executor": "@billy-briggs-dev/sonar:sonar",
      "options": {
        "project.settings": "./sonar-project.properties"
      }
    }
```

Below is a list of all Options supported by the Executors interface:

**_Options_**

- <b id="#/properties/project.settings">project.settings</b>
  - _The project settings file_
  - Type: `string`
- <b id="#/properties/sonar.host.url">sonar.host.url</b>
  - _The url of the SonarQube server_
  - Type: `string`
- <b id="#/properties/sonar.projectKey">sonar.projectKey</b>
  - _The project key_
  - Type: `string`
- <b id="#/properties/sonar.projectName">sonar.projectName</b>
  - _The project name_
  - Type: `string`
- <b id="#/properties/sonar.projectVersion">sonar.projectVersion</b>
  - _The project version_
  - Type: `string`
- <b id="#/properties/sonar.login">sonar.login</b>
  - _The SonarQube username_
  - Type: `string`
- <b id="#/properties/sonar.password">sonar.password</b>
  - _The SonarQube password_
  - Type: `string`
- <b id="#/properties/sonar.ws.timeout">sonar.ws.timeout</b>
  - _The timeout for the SonarQube API_
  - Type: `string`
- <b id="#/properties/sonar.projectDescription">sonar.projectDescription</b>
  - _The project description_
  - Type: `string`
- <b id="#/properties/sonar.links.homepage">sonar.links.homepage</b>
  - _The project homepage_
  - Type: `string`
- <b id="#/properties/sonar.links.ci">sonar.links.ci</b>
  - _The project continuous integration_
  - Type: `string`
- <b id="#/properties/sonar.links.issue">sonar.links.issue</b>
  - _The project issue tracker_
  - Type: `string`
- <b id="#/properties/sonar.links.scm">sonar.links.scm</b>
  - _The project source code management_
  - Type: `string`
- <b id="#/properties/sonar.sources">sonar.sources</b>
  - _The project source directories_
  - Type: `string`
- <b id="#/properties/sonar.tests">sonar.tests</b>
  - _The project test directories_
  - Type: `string`
- <b id="#/properties/sonar.sourceEncoding">sonar.sourceEncoding</b>
  - _The project source encoding_
  - Type: `string`
- <b id="#/properties/sonar.externalIssuesReportPaths">sonar.externalIssuesReportPaths</b>
  - _The project external issues report paths_
  - Type: `string`
- <b id="#/properties/sonar.projectDate">sonar.projectDate</b>
  - _The project date_
  - Type: `string`
- <b id="#/properties/sonar.projectBaseDir">sonar.projectBaseDir</b>
  - _The project base directory_
  - Type: `string`
- <b id="#/properties/sonar.working.directory">sonar.working.directory</b>
  - _The project working directory_
  - Type: `string`
- <b id="#/properties/sonar.scm.provider">sonar.scm.provider</b>
  - _The project source code management provider_
  - Type: `string`
- <b id="#/properties/sonar.scm.forceReloadAll">sonar.scm.forceReloadAll</b>
  - _The project source code management force reload all_
  - Type: `string`
- <b id="#/properties/sonar.scm.exclusions.disabled">sonar.scm.exclusions.disabled</b>
  - _The project source code management exclusions disabled_
  - Type: `string`
- <b id="#/properties/sonar.scm.revision">sonar.scm.revision</b>
  - _The project source code management revision_
  - Type: `string`
- <b id="#/properties/sonar.buildString">sonar.buildString</b>
  - _The project build string_
  - Type: `string`
- <b id="#/properties/sonar.newCode.referenceBranch">sonar.newCode.referenceBranch</b>
  - _The project new code reference branch_
  - Type: `string`
- <b id="#/properties/sonar.log.level">sonar.log.level</b>
  - _The project log level_
  - Type: `string`
  - <i id="/properties/sonar.log.level">path: #/properties/sonar.log.level</i>
- <b id="#/properties/sonar.verbose">sonar.verbose</b>
  - _The project verbose_
  - Type: `string`
- <b id="#/properties/sonar.scanner.dumpToFile">sonar.scanner.dumpToFile</b>
  - _The project scanner dump to file_
  - Type: `string`
- <b id="#/properties/sonar.scanner.metadataFilePath">sonar.scanner.metadataFilePath</b>
  - _The project scanner metadata file path_
  - Type: `string`
- <b id="#/properties/sonar.qualitygate.wait">sonar.qualitygate.wait</b>
  - _The project qualitygate wait_
  - Type: `string`
- <b id="#/properties/sonar.qualitygate.timeout">sonar.qualitygate.timeout</b>
  - _The project qualitygate timeout_
  - Type: `string`
