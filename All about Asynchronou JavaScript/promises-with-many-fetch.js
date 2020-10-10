

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
    console.log('promise 1 data resolved: ', data);
    return getTodos('localData/data2.json');
}).then(data => {
    console.log('promise 2 data resolved: ', data);
    return getTodos('localData/data3.json')
}).then(data => {
    console.log('promise 3 data resolved: ', data);
    // on and on if you have to do more fetching of data
    // .........
    // ........
}).catch(err => {
    console.log('promise rejected: ', err);
})


