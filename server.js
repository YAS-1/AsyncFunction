import express from "express";
import { fetchWithAsyncAwait } from "./asyncAwait.js";
import { fetchWithCallback } from "./callback.js";
import { fetchWithPromise } from "./promise.js";

const app = express();


const port = 3000; // The port our server runs on

const JSONurl = 'https://reqres.in/api/users?page=2' // the url where we are fetching data

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);

    //Using callback
    fetchWithCallback(JSONurl, (error, data) => { //calling the callback method
        if(error){
            console.log('Callback Error:', error);
        }
        else{
            console.log('Fetching users Using Callback:', data, "\n\n");
        }
    })
    console.log("\n")

    //Using Promises
    fetchWithPromise(JSONurl) // calling the promise method
    .then(data => {
        console.log('Fetching users Using Promise:', data,"\n\n");
    })
    .catch(error => {
        console.log('Promise Error:', error);
    })

    console.log("\n")

    fetchWithAsyncAwait(JSONurl) //calling the async and await method
    .then(data => {
        console.log('Fetching users Using Async Await:', data,"\n\n");
    })
    .catch(error => {
        console.log('Async Await Error:', error);
    })
});