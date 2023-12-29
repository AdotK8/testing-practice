export default function reverseString(str) {
  let newStr = "";
  console.log(str.length);

  for (let i = 0; i < str.length; i++) {
    newStr = str.charAt(i) + newStr;
  }

  return newStr;
}
