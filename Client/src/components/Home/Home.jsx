import React from 'react';
import Chat from "../Chat/Chat";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <h4>Welcome to the University Collaboration Platform</h4>
            <p>A digital hub for students, faculty and alumini to connect, and collaborate and grow</p>
           <Chat />
        </div>
    );
}

export default Home;
