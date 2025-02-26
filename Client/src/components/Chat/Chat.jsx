import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./Chat.css";

const socket = io("http://localhost:5000");

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const joinRoom = () => {
    if (room.trim()) {
      socket.emit("joinRoom", room);
      setJoined(true);
      setMessages([]); // Clear previous messages when switching rooms
    }
  };

  const sendMessage = () => {
    if (message.trim() && room) {
      socket.emit("sendMessage", { room, message });
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      {!joined ? (
        <div className="join-room">
          <h2>Select Chatroom</h2>
          <input
            type="text"
            placeholder="Enter room name..."
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={joinRoom}>Join Room</button>
        </div>
      ) : (
        <div>
          <h2>Chatroom: {room}</h2>
          <div className="messages">
            {messages.map((msg, index) => (
              <p key={index} className="message">{msg}</p>
            ))}
          </div>
          <div className="input-area">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
