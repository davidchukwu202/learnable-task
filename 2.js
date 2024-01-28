class MainStatistics {
    constructor(data) {
      this.data = data;
    }
  
    // Central Tendency
  
    // Mean
    calculateMean() {
      const sum = this.data.reduce((acc, value) => acc + value, 0);
      return sum / this.data.length;
    }
  
    // Median
    calculateMedian() {
      const CollectiveData = this.data.slice().sort((a, b) => a - b);
      const middleIndex = Math.floor(CollectiveData.length / 2);
  
      if (CollectiveData.length % 2 === 0) {
        return (CollectiveData[middleIndex - 1] + CollectiveData[middleIndex]) / 2;
      } else {
        return CollectiveData[middleIndex];
      }
    }
  
    // Mode
    calculateMode() {
      const frequencyMap = new Map();
  
      this.data.forEach((value) => {
        frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
      });
  
      let mode;
      let maxFrequency = 0;
  
      frequencyMap.forEach((frequency, value) => {
        if (frequency > maxFrequency) {
          maxFrequency = frequency;
          mode = value;
        }
      });
  
      return mode;
    }
  
    // Measures of Dispersion
  
    // Range
    calculateRange() {
      const max = Math.max(...this.data);
      const min = Math.min(...this.data);
      return max - min;
    }
  
    // Variance
    calculateVariance() {
      const mean = this.calculateMean();
      const squaredDifferences = this.data.map((value) => Math.pow(value - mean, 2));
      const sumSquaredDiff = squaredDifferences.reduce((acc, value) => acc + value, 0);
      return sumSquaredDiff / this.data.length;
    }
  
    // Standard Deviation
    calculateStandardDeviation() {
      return Math.sqrt(this.calculateVariance());
    }
  
    // Interquartile Range
    calculateInterquartileRange() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const lowerQuartile = this.calculateMedian(sortedData.slice(0, Math.floor(sortedData.length / 2)));
      const upperQuartile = this.calculateMedian(sortedData.slice(Math.ceil(sortedData.length / 2)));
      return upperQuartile - lowerQuartile;
    }
  }
  
  // Example
  const data = [5, 8, 12, 15, 18, 22, 22, 23, 25, 30];
  const statsCalculator = new DescriptiveStatistics(data);
  
  console.log('Mean:', statsCalculator.calculateMean());
  console.log('Median:', statsCalculator.calculateMedian());
  console.log('Mode:', statsCalculator.calculateMode());
  console.log('Range:', statsCalculator.calculateRange());
  console.log('Variance:', statsCalculator.calculateVariance());
  console.log('Standard Deviation:', statsCalculator.calculateStandardDeviation());
  console.log('Interquartile Range:', statsCalculator.calculateInterquartileRange());
  