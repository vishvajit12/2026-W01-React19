let user ={
    profile :[
        {
            name: "John"
        },
        {name: "Doe"},
        {name: "Smith"}
    ],
    rating : [
        {count:145},
        {count: 200},
        {count: 300}
    ]
}

// get the following format of the out put 
/*
output = {
    "John":{rating :145},
    "Doe":{rating : 200},
    "Smith":{rating : 300}
}
*/
// answer
let output = {};

for (let i = 0; i < user.profile.length; i++) {
    let name = user.profile[i].name;
    let rating = user.rating[i].count;
    output[name] = { rating: rating };
}
console.log(output);

// answer using map function
let outputMap = {};
user.profile.map((item, index) => {
    let name = item.name;
    let rating = user.rating[index].count;
    outputMap[name] = { rating: rating };
});
console.log(outputMap);

// map with for loop 
let outputMapForLoop = {};
for (let i = 0; i < user.profile.length; i++) {
    let name = user.profile[i].name;
    let rating = user.rating[i].count;
    outputMapForLoop[name] = { rating: rating };
}
console.log(outputMapForLoop);


