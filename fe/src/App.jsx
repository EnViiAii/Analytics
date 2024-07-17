import { useState } from "react";
import axios from "axios";
const App = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const res = await axios.post("/api/message", { message });
      setResponse(res.data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <input
        className="w-96 h-10 border-2 border-gray-500 mr-10 pl-2"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="border-2 rounded-lg w-20 h-10" onClick={sendMessage}>
        Send
      </button>
      {response && <p>{response.response}</p>}
    </div>
  );
};

export default App;
