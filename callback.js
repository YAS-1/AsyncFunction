export const fetchWithCallback = (url, callback) =>{ // function that takes in 2 parameters(the url where data is fetched from and the callback)
    fetch(url) // using the fetch method to get url data

    .then(res => {
        if(!res.ok){
            throw new Error(`Error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
}