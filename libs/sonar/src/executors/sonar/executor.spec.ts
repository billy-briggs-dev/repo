import { SonarExecutorSchema } from './schema';
import executor, { SonarExecutorOptions } from './executor';
import { ExecutorContext } from '@nrwl/devkit';

const options: SonarExecutorSchema = {};

describe('Sonar Executor', () => {
  it('can run', async () => {
    // const context: ExecutorContext = {} as any;
    // const output = await executor({} as SonarExecutorOptions, context);
    // expect(output.success).toBe(true);
  });
});