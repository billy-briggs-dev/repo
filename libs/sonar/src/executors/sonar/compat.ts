import { convertNxExecutor } from '@nrwl/devkit';

import { default as sonarExecutor } from './executor';

export default convertNxExecutor(sonarExecutor);