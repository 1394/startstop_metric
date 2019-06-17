const metric = {
  times: {},
  enable: process.env.METRICS,
  getMetric (key) {
    return metric.times[`${key}.result`]
  },
  getKeyLabel (key) {
    if (!metric.enable) {
      return
    }
    return ` :::[metric] ${key}`
  },
  start (key, msg) {
    if (!metric.enable) {
      return
    }
    metric.times[key] = Date.now()
    console.log(metric.getKeyLabel(key))
    msg && console.log(msg)
  },
  stop (key, msg) {
    if (!metric.enable) {
      return
    }
    const diffTime = Date.now() - metric.times[key]
    const result = metric.times[`${key}.result`] = {
      ms: diffTime,
      s: diffTime / 1000.0,
      min: diffTime / 60000.0,
    }
    if (result.s < 1) {
      console.log(metric.getKeyLabel(key), '... executed in ', result.ms, ' ms')
    } else {
      console.log(metric.getKeyLabel(key), '... executed in ', result.s.toFixed(3), ' seconds, and ', result.min.toFixed(0), ' minutes')
    }
    msg && console.log(msg)
  },
}

module.exports = metric
