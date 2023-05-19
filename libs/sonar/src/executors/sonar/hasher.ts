import { CustomHasher, HasherContext, Task } from '@nx/devkit';

/**
 * This is a boilerplate custom hasher that matches
 * the default Nx hasher. If you need to extend the behavior,
 * you can consume workspace details from the context.
 */
export const sonarHasher: CustomHasher = async (
  task: Task,
  context: HasherContext
) => {
  return context.hasher.hashTaskWithDepsAndContext(task);
};

export default sonarHasher;
