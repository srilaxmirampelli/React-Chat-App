import './index.css'
import { AiFillLike } from "react-icons/ai"

const MessageItem = (props) => {
    const { user, message, likes, onLike, backgroundColor} = props
    const initial = user.split(" ").map(name => name[0]).join("")
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    
    return (
        <div className="message-item">
            <div className='msg-header'>
                <div className="msg-profile-pic" style = {{backgroundColor}}>
                    {initial}
                </div>
                <strong className='user'>{user}</strong>
                <p className='msg-sent-time'>{currentTime}</p>
            </div>
            <div className='msg-card-like-container'>
                <div className='msg-card'>
                    <p className='message'>{message}</p>
                </div>
                <div className='like-container'>
                    <AiFillLike 
                        className={`like-button ${likes > 0 ? 'liked' : ''}`} 
                        onClick={onLike} 
                        size={18}
                    />
                    <span className='likes-count'>{likes > 0? likes: ""}</span>
                </div>
            </div>
        </div>
    );
}

export default MessageItem;
