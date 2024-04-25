// for (let i = 0; i < 5; i++) {
//   let str = "*";
//   for (y = 0; y < i; y++) {
//     str += "*";
//   }
//   console.log(str);
// }

// for (let i = 5; i > 0; i--) {
//   let str = "*";
//   for (y = 1; y < i; y++) {
//     str += "*";
//   }
//   console.log(str);
// }

for (let i = 0; i < 5; i++) {
  let str = " ";
  for (y = 5; y > i; y--) {
    str += " ";
    console.log(str);
    for (let a = 0; a < y; a++) {
      str += "*";
      console.log(str);
    }
  }

  console.log(str);
}
