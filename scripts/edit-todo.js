"use strict";

const userId = document.getElementById("userId");
const title = document.getElementById("title");
const completed = document.getElementById("completed");
const messageBody = document.getElementById("messageBody");
const toDoId = document.getElementById("toDoId");
const toDoIdContainer = document.getElementById("toDoIdContainer");
const formContainer = document.getElementById("formContainer");

window.onload = init;

formContainer.style.display = "none";

function init() {
    document.getElementById("searchBtn").onclick = searchById;
    document.getElementById("addBtn").onclick = postData;



}

function searchById() {
    formContainer.style.display = "block";
    fetch("https://jsonplaceholder.typicode.com/todos/" + toDoId.value)

        .then(response => response.json())
        .then(data => {
            messageBody.innerHTML = data.userId
            userId.value = data.userId
            title.value = data.title
            completed.value = data.completed

        })
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
        headers: {
            "Content-type":
                "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            messageBody.innerHTML = `Student ${data.id} added`
        })
        .catch(err => {
            messageBody.innerHTML = "Unexpected error";
        })
}