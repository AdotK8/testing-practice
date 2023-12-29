export default function ceasers(str, shift) {
  const key = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let ceasersStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == " ") {
      ceasersStr = ceasersStr + " ";
    } else if (!key.includes(str.charAt(i).toUpperCase())) {
      ceasersStr = ceasersStr + str.charAt(i);
    } else {
      let index = key.indexOf(str.charAt(i).toUpperCase());
      if (index === 25) {
        let ceasersLetter = key.charAt(0 + (shift - 1));
        ceasersStr = ceasersStr + ceasersLetter;
      }
      let ceasersLetter = key.charAt(index + shift);
      ceasersStr = ceasersStr + ceasersLetter;
    }
  }

  return ceasersStr;
}
