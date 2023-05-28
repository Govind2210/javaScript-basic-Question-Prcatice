let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------



// Your class should be named `Circle`.
// Method to get area should be named `getArea`
// Method to get circumference should be named `getCircumference`.
// Your class should take radius `r` as input when creating an object.

class Circle {
    constructor (radius){
        this.radius=radius;
    }
    getArea(){
    if (this.radius>=0){
        let area= 3.14*this.radius*this.radius;
        if(area==parseInt(area)){
        return parseInt(area);
        }
        else if(area==parseFloat(area)){
            return ( parseInt(area)+1);
        }
    }
    else{
        return 0;
    }
    }
    getCircumference(){
        if(this.radius>=0){
        let circumference= 2*3.14*this.radius;
        if(circumference==parseInt(circumference)){
            return parseInt(circumference);
            }
            else if(circumference==parseFloat(circumference)){
                return ( parseInt(circumference)+1);
            }
        }
        else{
        return 0;}
    }
}



// -------- Do NOT edit anything below this line ----------

let oneCircle = new Circle(parseInt(readLine()));
console.log(oneCircle.getArea());
console.log(oneCircle.getCircumference());