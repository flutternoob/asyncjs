/* console.log("1");
console.log("2");

setTimeout(() => {
    console.log("The callback function fired");
}, 2000);

console.log("4");
console.log("5"); */

//http requests using the XMLHttpRequest() object

/* const getTodos = (resource, callback) => {

    const request = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () => {
            //console.log(request, request.readyState);
        
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                //callback(undefined, data);
                resolve(data);
            } else if (request.readyState === 4) {
                //callback("Could not fetch data", undefined);
                reject("Error getting resource");
            }
        });
        
        //request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
        request.open("GET", resource);
        request.send();
    });
}; */

/* getTodos("todos/luigi.json").then(data => {
    console.log("promise 1 resolved", data);
    return getTodos("todos/mario.json");
}).then(data => {
    console.log("promise 2 resolved: ", data);
    return getTodos("todos/shaun.json");
}).then(data => {
    console.log("promise 3 resolved: ", data);
}).catch(err => {
    console.log("promise rejected", err);
}); */

/* getTodos("todos/luigi.json", (err, data) => {
    console.log(data);
    getTodos("todos/mario.json", (err, data) => {
        console.log(data);
        getTodos("todos/shaun.json", (err, data) => {
            console.log(data);
        });
    });
    /* if (err) {
        console.log(err);
    } else {
        console.log(data);
    } 
}); */

//Promise example

/* const getSomething = () => {
    return new Promise((resolve, reject) => {
        //fetch something
        resolve("Some data");
        reject("Some error");
    });
}; */

/* getSomething().then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
}); */

/* getSomething().then((data) => {
    console.log(data);
}).catch(err => {
    console.log(err);
}); */

//Http requests using the Fetch API

/* fetch(
    "todos/luigi.json"
).then((response) => {
    console.log("resolved", response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log("rejected", err);
}); */

//async and await

const getTodos = async () => {

    const response = await fetch("todos/luigi.json");

    if (response.status !== 200) {
        throw new Error("Cannot fetch the data");
    }

    const data = await response.json();
    return data;

};

getTodos()
    .then(data => console.log("resolved", data))
    .catch(err => console.log("rejected", err.message));