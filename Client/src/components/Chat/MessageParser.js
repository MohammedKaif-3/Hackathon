class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        this.actionProvider.greet();
      } else if (lowerCaseMessage.includes("courses") || lowerCaseMessage.includes("departments")) {
        this.actionProvider.handleCourses();
      } else if (lowerCaseMessage.includes("admission") || lowerCaseMessage.includes("apply")) {
        this.actionProvider.handleAdmission();
      } else if (lowerCaseMessage.includes("contact") || lowerCaseMessage.includes("phone")) {
        this.actionProvider.handleContact();
      } else {
        this.actionProvider.handleUnknown();
      }
    }
  }
  
  export default MessageParser;
  