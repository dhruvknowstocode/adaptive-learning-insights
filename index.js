function trackLearningCurve({
    timeSpent,
    milestonesAchieved,
    quizScores,
    quizWeights,
    historicalData = [],
    learningGoals = { goalMilestones: 0, goalScore: 0 }
}) {
    if (!timeSpent || !milestonesAchieved || !quizScores || quizScores.length === 0 || !quizWeights || quizWeights.length !== quizScores.length) {
        throw new Error('All inputs (timeSpent, milestonesAchieved, quizScores, quizWeights) are required and must match in length.');
    }

    // Calculate the weighted average score from the quizScores array
    const totalWeight = quizWeights.reduce((sum, weight) => sum + weight, 0);
    const weightedAverageScore = quizScores.reduce((sum, score, index) => sum + score * quizWeights[index], 0) / totalWeight;

    // Calculate the learning rate with recency effect
    const recencyFactor = 0.75; // Higher value gives more importance to recent milestones
    const learningRate = ((milestonesAchieved * recencyFactor) / timeSpent) * weightedAverageScore;

    // Historical data analysis
    const averageHistoricalRate = historicalData.length > 0
        ? historicalData.reduce((sum, data) => sum + data.learningRate, 0) / historicalData.length
        : null;

    // Personalized goals comparison
    const goalProgress = {
        milestones: milestonesAchieved >= learningGoals.goalMilestones,
        score: weightedAverageScore >= learningGoals.goalScore
    };

    // Provide recommendations based on the learning rate
    let recommendation;
    if (learningRate > 2) {
        recommendation = "Outstanding progress! You’re on an accelerated learning path.";
    } else if (learningRate > 1.5) {
        recommendation = "Great progress! Keep leveraging your effective study methods.";
    } else if (learningRate > 1) {
        recommendation = "Good progress. Consider focusing on areas where you can improve further.";
    } else if (learningRate > 0.5) {
        recommendation = "Moderate progress. Try incorporating additional study techniques or resources.";
    } else {
        recommendation = "Limited progress. You might benefit from a more structured study plan or additional support.";
    }

    return {
        learningRate,
        recommendation,
        weightedAverageScore,
        recencyFactor,
        averageHistoricalRate,
        goalProgress
    };
}

module.exports = trackLearningCurve;
