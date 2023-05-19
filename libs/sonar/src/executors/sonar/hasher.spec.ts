import { Hasher, HasherContext } from '@nx/devkit';

import { sonarHasher } from './hasher';

describe('sonarHasher', () => {
  it('should generate hash', async () => {
    const mockHasher: Hasher = {
      hashTaskWithDepsAndContext: jest
        .fn()
        .mockReturnValue({ value: 'hashed-task' }),
    } as unknown as Hasher;
    const hash = await sonarHasher(
      {
        id: 'my-task-id',
        target: {
          project: 'proj',
          target: 'target',
        },
        overrides: {},
      },
      {
        hasher: mockHasher,
      } as unknown as HasherContext
    );
    expect(hash).toEqual({ value: 'hashed-task' });
  });
});
