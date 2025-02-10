export const fetchWithAsyncAwait = async (url) => { // async function that takes in the url where data is fetched from

    // using try catch for error handling
    try{ 
        const res = await fetch(url);
        if (!res.ok){
            throw new Error(`Error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data.slice(0,5);
    }
    catch (error){ 
        throw new Error(error);
    }
}