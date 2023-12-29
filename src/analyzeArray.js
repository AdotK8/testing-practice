export default function analyzeArray(arr) {
  const Object = {
    average: arr.reduce((partialSum, a) => partialSum + a, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };

  return Object;
}
