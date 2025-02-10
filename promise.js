export const fetchWithPromise = (url) => { // function that takes in the url as the parameter
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error! Status : ${res.status}`);
            }
            return res.json();
        })
        .then(data => { 
            resolve(data.slice(0,5)); // the resolve returns the first five records in the fetched data
        })
        .catch(error => {
            reject(error); // reject returns an error when something goes wrong
        })
    })
}