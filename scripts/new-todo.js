"use strict";

const userId = document.getElementById("userId");
const title = document.getElementById("title");
const completed = document.getElementById("completed");
const messageBody = document.getElementById("messageBody");

window.onload = init;
function init() {
document.getElementById("addBtn").onclick = postData;
    
}


function postData() {
    let bodyData = {
        userId: userId.value,
        title: title.value,
        completed: completed.value
    }
    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {"Content-type": 
                    "application/json; charset=UTF-8"}
    })
        .then(response => response.json())
        .then(data => {
            messageBody.innerHTML = `Student ${data.id} added`
        })
        .catch(err => {
            messageBody.innerHTML = "Unexpected error";
        })
}