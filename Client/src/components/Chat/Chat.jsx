import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const Chat = () => {
  return (
    <div style={{ width: "275px", height: "500px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#f4f4f4", padding: "10px" }}>
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
    </div>
  );
};

export default Chat;
