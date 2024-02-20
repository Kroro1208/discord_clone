import './App.scss';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      {/* sidebar */}
      <Sidebar />
      {/* Chat */}
      <Chat />
    </div>
  );
}

export default App;
