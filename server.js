import express from "express";
import { fetchWithAsyncAwait } from "./asyncAwait.js";
import { fetchWithCallback } from "./callback.js";
import { fetchWithPromise } from "./promise.js";

const app = express();


const port = 3000;

const JSONurl = 'https://jsonplaceholder.typicode.com/comments'

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);

    //Using callback
    fetchWithCallback(JSONurl, (error, data) => {
        if(error){
            console.log('Callback Error:', error);
        }
        else{
            console.log('Fetching Using Callback:', data, "\n");
        }
    })
    console.log("\n")

    //Using Promises
    fetchWithPromise(JSONurl)
    .then(data => {
        console.log('Fetching Using Promise:', data,"\n");
    })
    .catch(error => {
        console.log('Promise Error:', error);
    })

    console.log("\n")

    fetchWithAsyncAwait(JSONurl)
    .then(data => {
        console.log('Fetching Using Async Await:', data,"\n");
    })
    .catch(error => {
        console.log('Async Await Error:', error);
    })
});