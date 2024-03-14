import { useSelector } from 'react-redux';
import './App.scss';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/login';

function App() {

  // const user = useSelector((state) => state.user.user);
  const user = null;

  return (
    <div className="App">
      {user ? (
        <>
          {/* sidebar */}
          <Sidebar />
          {/* Chat */}
          <Chat />
        </>
      ) : (
        <>
          <Login/>
        </>
      )}
    </div>
  );
}

export default App;
