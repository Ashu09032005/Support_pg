import React, { useState } from "react";
import "./Chat.css";
import SearchBar from "./SearchBar";

const Chat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hey, I need help!", sender: "user", time: "08:15 AM" },
        { id: 2, text: "Good morning! How can I help?", sender: "support", time: "08:20 AM" },
        { id: 3, text: "I need to know the statute of limitations for a personal injury claim.", sender: "user", time: "08:22 AM" },
        { id: 4, text: "The statute of limitations varies depending on the state where the injury occurred.", sender: "support", time: "08:25 AM" },
    ]);

    // Function to handle sending messages
    const handleSendMessage = (message) => {
        if (!message.trim()) return;

        const newMessage = {
            id: messages.length + 1,
            text: message,
            sender: "user",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        setMessages([...messages, newMessage]);
    };

    return (
        <div className="chat-container">
            {/* Messages */}
            <div className="chat-messages">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message ${msg.sender}`}>
                        <div className="message-text">{msg.text}</div>
                        <div className="message-time">{msg.time}</div>
                    </div>
                ))}
            </div>

            {/* SearchBar Component for input */}
            <SearchBar onSendMessage={handleSendMessage} />
        </div>
    );
};

export default Chat;

