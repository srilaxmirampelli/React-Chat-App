import './index.css'
import { FaUserGroup } from "react-icons/fa6";

function ChatHeader() {
    return (
      <>
        <div className="chat-header-container">
          <div>
            <h1 className='chat-header'>Introductions</h1>
            <p className='chat-details'>This Channel is For Company Wide Chatter</p>
        </div>
        <div className='chat-header-group'>
          <p className='grp-count'>3 / 100</p>
          <FaUserGroup color = "gray" size = {27}/>
        </div>
        </div>
      </>
    );
  }
  
  export default ChatHeader;