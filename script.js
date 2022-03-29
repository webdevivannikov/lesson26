const getData = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        sendData('https://jsonplaceholder.typicode.com/posts',JSON.stringify(data));
    })
    .catch(error => {
        console.log(error);
    });
};
const sendData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(response => response.json())
    .catch(error => {
        console.log(error);
    });
};
getData('db.json');
