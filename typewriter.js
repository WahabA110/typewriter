const sentence = "hello there from lighthouse labs";

let time = 50;

// for (const char of sentence) {
//   time += 50;
//   setTimeout(() => {
//     process.stdout.write(char);
//     process.stdout.write('\n');

//   }, time);
// }

for (let i = 0; i < sentence.length; i ++) {
  time += 50;
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if(i === sentence.length - 1) {
      process.stdout.write('\n'); 
    }
  }, time);
}