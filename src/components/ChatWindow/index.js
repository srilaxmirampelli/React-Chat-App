import './index.css'

import ChatHeader from '../ChatHeader';
import MessageInput from '../MessageInput';

const  ChatWindow = () => {
  return (
    <div className="chat-window">
      <ChatHeader />
      <MessageInput />
      </div>
  );
}

export default ChatWindow;
