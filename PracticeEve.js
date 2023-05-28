// prime number 

/**
 * 0-100
 * for loop 
 * if 
 */

// Prime Numbers

for(let i = 2 ; i <=  100 ; i++){
    // console.log("i" , i)
    for(var j = 2 ; j < i ; j++){
        // console.log("j" , j)
        if(i % j == 0 ){
            break ;
        }
    }
    if(i == j){
        console.log(i)
    }
 }


