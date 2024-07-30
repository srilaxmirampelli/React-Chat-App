import './App.css';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

const App = () => (
    <div className="app-container">
      <Sidebar />
      <ChatWindow />
    </div>
)

export default App;
