const url = 'wss://ratchet.recruitmentrevolution.com/ws'
const connection = new WebSocket(url)
let dialog = 'Talking to ' + url + "\n";

connection.onopen = () => {
  connection.send('Boo') 
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
  dialog += e.data;
  document.getElementById("thescreen").innerHTML = dialog;
  console.log(dialog);
}