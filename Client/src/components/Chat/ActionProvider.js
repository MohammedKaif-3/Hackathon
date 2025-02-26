import axios from "axios";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  addMessageToState = (message) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  greet = () => {
    const message = this.createChatBotMessage("Hello! How can I assist you about RGUKT RK Valley?");
    this.addMessageToState(message);
  };

  handleDefaultResponses = (query) => {
    const lowerCaseQuery = query.toLowerCase();

    const responses = {
      hi: "Hi there! How can I assist you about RGUKT RK Valley?",
      hello: "Hello! How can I help you today?",
      hey: "Hey! What would you like to know about RGUKT RK Valley?",
      "who are you": "I'm an AI chatbot here to provide information about RGUKT RK Valley.",
      "what are you": "I'm a chatbot designed to assist with queries about RGUKT RK Valley.",
    };

    if (responses[lowerCaseQuery]) {
      const message = this.createChatBotMessage(responses[lowerCaseQuery]);
      this.addMessageToState(message);
      return true; // Means response was found
    }
    return false; // No default response found, continue with AI fetch
  };

  handleUnknown = async (query) => {
    if (this.handleDefaultResponses(query)) {
      return; // If a predefined response exists, exit the function
    }

    const loadingMessage = this.createChatBotMessage("Fetching more details...");
    this.addMessageToState(loadingMessage);

    const apiKey = import.meta.env.VITE_OPENAI_API_KEY || process.env.REACT_APP_OPENAI_API_KEY;

    if (!apiKey) {
      console.error("❌ OpenAI API Key is missing! Check .env file.");
      this.addMessageToState(this.createChatBotMessage("API Key is missing. Please check your setup."));
      return;
    }

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [
            { role: "system", content: "You are a helpful assistant providing details about RGUKT RK Valley." },
            { role: "user", content: query },
          ],
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("AI Response:", response.data);

      const aiResponse = response.data.choices[0].message.content;
      const botMessage = this.createChatBotMessage(aiResponse);
      this.addMessageToState(botMessage);
    } catch (error) {
      console.error("❌ Error fetching AI response:", error.response ? error.response.data : error.message);
      this.addMessageToState(this.createChatBotMessage("Sorry, I couldn't fetch the details right now."));
    }
  };
}

export default ActionProvider;
