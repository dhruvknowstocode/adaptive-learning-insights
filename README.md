# Adaptive Learning Insights

## Overview

`adaptive-learning-insights` is a Node.js package that tracks and analyzes learning progress using adaptive metrics. It provides insights based on user performance, helping to optimize learning strategies.

## Installation

To install the package, run:

```bash
npm install adaptive-learning-insights
```

## Usage
Here’s an example of how to use the `trackLearningCurve` function from the `adaptive-learning-insights` package:

```javascript
const trackLearningCurve = require('adaptive-learning-curve');

const data = {
    timeSpent: 40, // Total hours spent learning
    milestonesAchieved: 5, // Number of learning milestones achieved
    quizScores: [80, 85, 90], // Array of quiz scores
    quizWeights: [0.3, 0.3, 0.4], // Corresponding weights for each quiz score
    historicalData: [
        { learningRate: 1.2 },
        { learningRate: 1.5 },
        { learningRate: 1.0 }
    ], // Historical learning data for comparison (optional)
    learningGoals: { goalMilestones: 5, goalScore: 85 } // Personalized learning goals (optional)
};

const insights = trackLearningCurve(data);

console.log(insights);

```


