var webSocket = new WebSocket("ws://host.com/path");

function onClose(ws) {
  ws.onclose = (e) => {
    // connection closed
    console.log(e.code, e.reason);
  };
}

function initWs(url) {
  return new WebSocket(url);
}

function onError(ws) {
  ws.onerror = (e) => {
    // an error occurred
    console.log(e.message);
  };
}

function sendToServer(ws) {
  ws.onopen = () => {
    // connection opened
    ws.send("something"); // send a message
  };
}

function onMessage(ws) {
  ws.onmessage = (e) => {
    // a message was received
    console.log(e.data);
  };
}

export { initWs, sendToServer, onClose, onMessage, onError };
