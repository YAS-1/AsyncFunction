export const fetchWithPromise = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error! Status : ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            resolve(data.slice(0,5));
        })
        .catch(error => {
            reject(error);
        })
    })
}