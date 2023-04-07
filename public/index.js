ws = new WebSocket("ws://" + window.location.hostname + ":3001")

let sendButton = document.getElementById("sendButton");

function buttonPress(){
    ws.send((new Date() / 1000).toString())
}