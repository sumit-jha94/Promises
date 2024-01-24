function fun1(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const err = false;
            if(!err){
                console.log("Promise is successful");
                resolve("Mission Accomplished");
            }
            else{
                console.log("Promise is not successful");
                reject("Mission Failed");

            }
        }, 2000);
    })
}

fun1().then(function(err){
    console.log("Thanks " + err);
}).catch(function(err){
    console.log("No Thanks " + err);
})