


const getTodos = (resourse) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4) {
                reject("we encounter errors")
            }
        });

        request.open('GET', resourse);
        request.send();
    })
}

getTodos('localData/data1.json').then(data => {
    console.log('promise resolved: ', data);
}).catch(err => {
    console.log('promise rejected: ', err);
})
