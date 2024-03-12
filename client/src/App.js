const {useEffect, useState} = require("react");
const io = require('socket.io-client');
const socket = io.connect("http://localhost:3333");

function App() {
  const[message, setMessage] = useState("");
  const[received, setReceived] = useState("");

  function sendMessage(){
    console.log("Clicked!");
    socket.emit("send", {message: message});
  }

  useEffect(()=>{
    socket.on("receive", (data)=>{
      setReceived(data.message);
    })
  },[socket])

  return (
    <div className="App">
      Let's Chat
      <div>
        <input
          placeholder="Type here..."
          onChange={(e)=>{setMessage(e.target.value)}}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <h3>
          {received}
        </h3>
      </div>
    </div>
  );
}

export default App;
