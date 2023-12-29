export default function capitalise(str) {
  const newStr = str.charAt(0).toUpperCase() + str.slice(1);
  return newStr;
}
