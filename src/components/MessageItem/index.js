import './index.css';
import { AiOutlineLike } from "react-icons/ai";

const MessageItem = (props) => {
    const { user, message, likes, onLike } = props;
    const initial = user.split(" ").map(name => name[0]).join("");
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    return (
        <div className="message-item">
            <div className='msg-header'>
                <div className="msg-profile-pic">
                    {initial}
                </div>
                <strong className='user'>{user}</strong>
                <p className='msg-sent-time'>{currentTime}</p>
            </div>
            <div className='msg-card'>
                <p className='message'>{message}</p>
            </div>
            <div className='like-container'>
                <AiOutlineLike 
                    className={`like-button ${likes > 0 ? 'liked' : ''}`} 
                    onClick={onLike} 
                    size={16}
                />
                <span className='likes-count'>{likes > 0? likes: ""}</span>
            </div>
        </div>
    );
}

export default MessageItem;
