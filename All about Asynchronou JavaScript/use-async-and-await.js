

// Async & Await
const getTodos = async () => {
    const response = await fetch('localData1/data.json');

    if (response.status !== 200) {
        throw new Error("sorry, we can't find the data"); // this message is the message in the catch block
    }

    const data = await response.json();
    console.log(data);
    return data;
};

// the longer way
getTodos().then(data => {
    console.log('resolved: ', data);
}).catch((err) => {
    console.log('rejected: ', err.message);
});

// The shorter way
// getTodos()
//     .then(data => console.log('resolved: ', data))
//     .catch(err => console.log('rejected: ', err.message))
