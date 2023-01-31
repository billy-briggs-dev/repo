def splitJobs(String target, int bins) {
  def String baseSha = env.CHANGE_ID ? 'origin/master' : 'origin/master~1'
  def String raw
  raw = sh(script: "npx nx print-affected --base=${baseSha} --target=${target}", returnStdout: true)
  def data = readJSON(text: raw)

  def tasks = data['tasks'].collect { it['target']['project'] }

  if (tasks.size() == 0) {
    return tasks
  }

  def taskBins = []
  def binSize = tasks.size() / bins
  def binStart = 0
  def binEnd = binSize

  for (int i = 0; i < bins; i++) {
    if (i == bins - 1) {
      binEnd = tasks.size()
    }

    taskBins.add(tasks[binStart..binEnd])
    binStart = binEnd
    binEnd += binSize
  }

  return taskBins
}
