import { convertNxExecutor } from '@nx/devkit';

import { default as sonarExecutor } from './executor';

export default convertNxExecutor(sonarExecutor);
