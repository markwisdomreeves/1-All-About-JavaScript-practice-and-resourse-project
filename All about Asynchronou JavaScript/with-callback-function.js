

const getTodos = (callback) => {
    
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback("could not fetch data", undefined);
        }

    })

    // real URL endpoint
    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

    // local json file
    request.open('GET', 'data.json');
    request.send();
}


getTodos((err, data) => {
    console.log("callback fire")
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
});
