import { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci"
import './index.css'

// List of Conversations
const conversations = ["Poland Office", "Introductions", "India Office"]

const Sidebar = () => {
  const [activeConversation, setActiveConversation] = useState(null)

  // Sidebar Header
  const sidebarHeader = () => {
    return (
      <div className="sidebar-header">
        <div className="profile-container">
          <div className="profile-pic">
            RR
            <div className="online-indicator"></div>
          </div>
          <div className="profile-info">
            <h1 className='profile-name'>Rolande Raimondi</h1>
            <p className='profession'>Research Nurse</p>
          </div>
      </div>
    </div>
    )
  }

  // Set Conversation Active
  const onSelectConversation = (index) => {
    setActiveConversation(index)
  }

  // Conversations List
  const conversationList = () => {
    return (
      <div className="conversation-list">
        <div className='cov-add-container'>
        <h1 className='conv-heading'>Conversations</h1>
        <CiCirclePlus color = "gray" size={26}/>
        </div>
        {conversations.map((conv, index) => (
          <div key={index} className={`conversation-item ${activeConversation === index? 'active': ""}`} onClick={() => onSelectConversation(index)} >
          <p className="conv-item-hash">#</p>
          <p className="conv-item">{conv}</p>
        </div>
        ))}
      </div>
    )
  }

  return (
      <div className="sidebar">
        {sidebarHeader()}
        {conversationList()}
      </div>
  )
}

export default Sidebar
