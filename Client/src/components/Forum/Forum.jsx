import React from "react";
import Card from "../Card/Card"; // Import the Card component
import Footer from "../Footer/Footer";

const Forum = () => {
  // Sample forum topics data
  const forumTopics = [
    {
      image: "https://firebasestorage.googleapis.com/v0/b/abhiyanth-a8d4c.firebasestorage.app/o/culturalGallery%2FWhatsApp%20Image%202025-02-20%20at%201.13.03%20PM.jpeg?alt=media&token=93b7ec21-7efe-4e35-8f78-fbbb93971ac2",
      title: "Dance Competition",
      description: "Dance your Heart Out, it's time to break",
      buttonText: "Join Now",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/abhiyanth-a8d4c.firebasestorage.app/o/technical%2Fcode.jpg?alt=media&token=dd24a4b3-e7e5-4fc1-aa5f-7e31f52dcddf",
      title: "Coding Contest",
      description: "The Coding Contest in an exciting event where participants solve a series of algorithms and problems",
      buttonText: "Explore",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/abhiyanth-a8d4c.firebasestorage.app/o/culturalGallery%2FWhatsApp%20Image%202025-01-31%20at%203.47.12%20PM.jpeg?alt=media&token=cbb394ee-521d-4472-9d7a-8c31fa417237",
      title: "Short Film Contest",
      description: "The Short Film Contest is an exciting platform",
      buttonText: "Learn More",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {forumTopics.map((topic, index) => (
          <Card
            key={index}
            image={topic.image}
            title={topic.title}
            description={topic.description}
            buttonText={topic.buttonText}
            onButtonClick={() => (window.location.href = "https://abhiyanthrkv.in/technicalEvents/CSE")}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Forum;
