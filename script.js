let createNewClassButtonEl = document.getElementById("createNewClassButton");



createNewClassButtonEl.addEventListener("click", createNewClassFunc);


function createNewClassFunc() {
    let createNewClassDiv = $('<div></div>');
    createNewClassDiv.attr("id", "createNewClassDiv");
}