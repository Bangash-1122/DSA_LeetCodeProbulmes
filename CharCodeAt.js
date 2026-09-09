function rot13(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Only change uppercase letters A-Z
    if (char >= "A" && char <= "Z") {
      let code = char.charCodeAt(0);

      // ROT13 shift
      code = ((code - 65 + 13) % 26) + 65;

      result += String.fromCharCode(code);
    } else {
      // Keep spaces and punctuation unchanged
      result += char;
    }
  }

  return result;
}
console.log(rot13("SERR PBQR PNZC"));
// FREE CODE CAMP

console.log(rot13("SERR CVMMN!"));
// FREE PIZZA!

console.log(rot13("SERR YBIR?"));
// FREE LOVE?

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
// THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
