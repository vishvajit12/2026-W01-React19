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

