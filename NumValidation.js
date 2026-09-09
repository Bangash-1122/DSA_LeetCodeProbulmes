function telephoneCheck(str) {
  const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

  return pattern.test(str);
}

console.log(telephoneCheck("555-555-5555"));       // true
console.log(telephoneCheck("1 555-555-5555"));     // true
console.log(telephoneCheck("1 (555) 555-5555"));   // true
console.log(telephoneCheck("5555555555"));         // true
console.log(telephoneCheck("(555)555-5555"));      // true
console.log(telephoneCheck("1(555)555-5555"));     // true

console.log(telephoneCheck("555-5555"));            // false
console.log(telephoneCheck("1 555)555-5555"));      // false
console.log(telephoneCheck("2 (757) 622-7382"));    // false
console.log(telephoneCheck("555)-555-5555"));       // false
console.log(telephoneCheck("(555-555-5555"));       // false


// ^
// (1\s?)?             → Optional country code 1
// (\(\d{3}\)|\d{3})   → Area code: (555) or 555
// [\s-]?              → Optional space or -
// \d{3}               → Next 3 digits
// [\s-]?              → Optional space or -
// \d{4}               → Final 4 digits
// $
