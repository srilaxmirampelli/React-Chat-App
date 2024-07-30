import React, { useState, useRef } from 'react';
import './index.css';
import MessageItem from '../MessageItem';
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import Picker from "emoji-picker-react";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const MessageInput = () => {
    const defaultMessages = [
        { user: "PubNub Bot", text: "Welcome to Team Chat. 👋👋 Send a message now to start interacting with other users in the app. ⬇️", likes: 0 },
        { user: "Gregory Goolsby", text: "Hey everyone!", likes: 0 },
        { user: "Elin Emmanuel", text: "Oh hi, Gregory! Rolande is around, too.", likes: 0 }
    ];
    
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(defaultMessages);
    const [showUserList, setShowUserList] = useState(false);
    const [cursorPosition, setCursorPosition] = useState(null);

    const messageInputRef = useRef(null);

    const onEnterMessage = event => {
        if (event.key === 'Enter') {
            onClickSendMessage();
        }
    };

    const onClickSendMessage = () => {
        const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
        if (message.trim() !== '') {
            setMessages([...messages, { text: message, user: randomUser, likes: 0 }]);
            setMessage('');
            setShowEmojiPicker(false);
        }
    };

    const onLikeMessage = index => {
        const newMessages = [...messages];
        newMessages[index].likes += 1;
        setMessages(newMessages);
    };

    const onUserClick = (user) => {
        const newText = message.slice(0, cursorPosition) + user + " " + message.slice(cursorPosition);
        setMessage(newText);
        setShowUserList(false);
    };

    const onInputChange = (e) => {
        const { value, selectionStart } = e.target;
        setMessage(value);
        setCursorPosition(selectionStart);
        
        if (value[selectionStart - 1] === '@') {
            setShowUserList(true);
        } else {
            setShowUserList(false);
        }
    };

    
    return (
        <>
            <div className="chat-container">
                <div>
                    {messages.map((msg, index) => (
                        <MessageItem 
                            key={index} 
                            message={msg.text} 
                            user={msg.user} 
                            likes={msg.likes} 
                            onLike={() => onLikeMessage(index)}
                        />
                    ))}
                </div>
            </div>
            <div className='send-btn-container'>
                <div className="message-input-container">
                    <input 
                        type="text" 
                        value={message} 
                        onChange={onInputChange} 
                        placeholder="Type Message" 
                        className='message-input-field'
                        onKeyDown={onEnterMessage}
                        ref={messageInputRef}
                    />
                    <MdOutlineEmojiEmotions 
                        color="gray" 
                        size={26} 
                        className='emoji-icon' 
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)} 
                    />
                </div>
                <button onClick={onClickSendMessage} className='send-btn'>
                    <IoSend color='white' size={23} />
                </button>
                {showEmojiPicker && (
                    <div className="emoji-picker">
                        <Picker onEmojiClick={(emojiObject)=> setMessage((prevMsg)=> prevMsg + emojiObject.emoji)}/> 
                    </div>
                )}
                {showUserList && (
                    <div className="user-list-dropdown">
                        {user_list.map((user, index) => (
                            <div key={index} className="user-list-item" onClick={() => onUserClick(user)}>
                                {user}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default MessageInput;
