// promise 

let bucket = ["rice" , "salt" , "sugar" , "vegitable" , "chole"]

// produce --> create
const FriedRicePromise = new Promise((resolve , reject)=>{
    if(bucket.includes( "rice" )&& bucket.includes("salt") && bucket.includes("vegitable")){
       resolve( "fried Rice is ready")
    }
    else{
        reject(new Error("error !"))
    }
})

// consume
// how to consume

FriedRicePromise.then((myfriedrice)=>{ // jab prmoise resolve hoga 
    console.log("lets eat if" , myfriedrice)
}).catch(()=>{console.log(error)
})

/**
 * promise is proxy for value is not necessarily know when the promises created ,
 *  it is just asyn method that work like sync 
 * but this asyn dont give value immedately . it give a value in the some point in futhure.
 */









