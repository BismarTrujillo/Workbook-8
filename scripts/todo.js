window.onload = function () {

    let button = document.getElementById("button")
    let infoContainer = document.getElementById("infoContainer")

    button.onclick = buttonClick

}

//----------------------------------TEST (WORKS)------------------------------------------------------------------//
 function buttonClick()
 {
    let textBox = document.getElementById("textBox").value
    let infoContainer = document.getElementById("infoContainer")
    
    infoContainer.innerHTML = " "

    fetch("http://jsonplaceholder.typicode.com/todos/")
    .then(response => response.json())
    .then (data => {
        for(let i=0; i<data.length; i++){ 
            if(textBox == data[i].id){
                infoContainer.innerHTML = data[i].title
            }
}
    })
 }
