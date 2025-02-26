import React from 'react';
import Chat from "../Chat/Chat";
import "./Home.css";

import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <h4>Welcome to the University Collaboration Platform</h4>
            <p>A digital hub for students, faculty and alumini to connect, and collaborate and grow</p>
            <Chat />
            <img src='https://th.bing.com/th/id/OIP.sE2ufxysUUtJFcFio-3DNAHaE8?rs=1&pid=ImgDetMain'></img>
           <Footer />
        </div>
    );
}

export default Home;
