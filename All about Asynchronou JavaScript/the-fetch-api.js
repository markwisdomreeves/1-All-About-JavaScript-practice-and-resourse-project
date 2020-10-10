

// fetch api
// When using the fetch Api, The promise is only rejected when 
// we are getting a Network error: eg - if we can't reach the API for some reason, etc
// But when using a local json file, we will not get a rejected message.
// We can only get a rejected message when we requesting data from a real client API
fetch('localData/data1.json').then((response) => {
    console.log('resolved: ', response);
    return response.json();
}).then(data => {
    console.log(data)
}).catch((err) => {
    console.log('rejected', err);
})
