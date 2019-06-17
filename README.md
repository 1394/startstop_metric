helper methods for logging start/stop execution time. output with ms, seconds & minutes

======
## usage
```javascript
    metric.start('metricKey', 'start execution')
    someFunc()
    metric.stop('metricKey')
    const results = metrick.getMetric('metricKey')
