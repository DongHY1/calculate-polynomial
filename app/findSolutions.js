export function findSolutions(total, coefficients) {
  let solutions = [];
  const search = (index, sum, currentSolution) => {
    if (index === coefficients.length) {
      if (sum === total) {
        solutions.push([...currentSolution]);
      }
      return;
    }

    const maxCount = Math.floor((total - sum) / coefficients[index]);
    for (let i = 0; i <= maxCount; i++) {
      search(index + 1, sum + i * coefficients[index], [...currentSolution, i]);
    }
  };

  search(0, 0, []);
  return solutions;
}
