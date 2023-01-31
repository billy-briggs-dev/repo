def splitJobs(String target, int bins) {
  def String baseSha = env.CHANGE_ID ? 'origin/master' : 'origin/master~1'
  def String raw
  raw = sh(script: "npx nx print-affected --base=${baseSha} --target=${target}", returnStdout: true)
  def data = readJSON(text: raw)

  def tasks = data['tasks'].collect { it['target']['project'] }

  if (tasks.size() == 0) {
    return tasks
  }

  // Ensure that all bins have roughly the same number of tasks
  def binSize = (tasks.size() + bins - 1) / bins
  def split = []
  def bin = []
  for (int i = 0; i < tasks.size(); i++) {
    bin.add(tasks[i])
    if (bin.size() == binSize || i == tasks.size() - 1) {
      split.add(bin)
      bin = []
    }
  }

  return split
}
