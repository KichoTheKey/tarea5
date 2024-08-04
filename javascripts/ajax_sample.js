let number = 0;
let data = [];
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

function getData() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status ==200) {
            data = request.response;
            updateContent();
        }
    };
    request.open("GET", "ajax.json");
    request.responseType = "json"
    request.send(null);
}

function updateContent() {
    titleArea.innerHTML = data[number].title;
    contentArea.innerHTML = data[number].content;
    videoArea.setAttribute("src", data[number].url);
    number = (number + 1) % data.length;
}

function changeVideo() {
    if (data.length === 0) {
        getData();
    } else {
        updateContent();
    }
}

window.onload = changeVideo;
button.addEventListener('click', changeVideo);