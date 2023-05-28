let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Define your class here
// your class name should be 'Movie' and  method name as 'run'
class movie{
constructor(language ,numCharacters , lengthInMinutes ){
        this.language = language
        this.numCharacters = numCharacters
        this.lengthInMinutes = lengthInMinutes
    }
    //This is a French movie with 4 characters and is 200 minutes long.
    run(){
        //  return `This is a ${this.language}, movie with ${this.numCharacters} ,characters and is ${this.lengthInMinutes} ,minutes long.`;
        console.log("This is a "+ this.language +"movie with " + this.numCharacters + "characters and is" + this.lengthInMinutes + "minutes long.")
    }
}



// DO NOT CHANGE ANYTHING BELOW THIS LINE

let language = readLine();
// console.log(language);
let numCharacters = readLine();
// console.log(numCharacters);
let lengthInMinutes = readLine();
// console.log(lengthInMinutes);

let movie =  new Movie(lengthInMinutes, numCharacters, language)
console.log(movie.run());