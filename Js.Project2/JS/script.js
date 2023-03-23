
for(let i = 1000; i > 0; i--){
    if(i % 2 === 0){
        console.log(i);
    }
}

for(let i = 1; i < 10001; i++){
    if(i % 2500 === 0){
        if(i === 2500){
            console.log("A quarter of the way there!");
        }else if(i === 5000){
            console.log("Halfway there!");
        }else if(i === 7500){
            console.log("Just a little bit more!");
        }else{
            console.log("The loop is done!");
        }
    }
}


let shows = ["Breaking Bad","The Expanse", "Mr. Robot", "The Orville", "Doctor Who"];

for(let i = 0; i < shows.length; i++){
    console.log("My #" + (i+1) + " favorite TV Show is: " + shows[i]);
}