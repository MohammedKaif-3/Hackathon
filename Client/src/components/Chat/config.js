import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "RGUKT Bot",
  initialMessages: [
    createChatBotMessage("Hello! Ask me anything about RGUKT RK Valley."),
  ],
  customStyles: {
    botMessageBox: { backgroundColor: "#376B7E" },
    chatButton: { backgroundColor: "#5ccc9d" },
  },
};

export default config;
