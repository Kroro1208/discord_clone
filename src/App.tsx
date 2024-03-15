import { useSelector } from 'react-redux';
import './App.scss';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/login';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './utils/ErrorFallback';

function App() {

  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      // console.log('Payload:', loginUser);
      if (loginUser) {
        dispatch(login({
          userId: loginUser.uid,
          image: loginUser.photoURL,
          email: loginUser.email,
          displayName: loginUser.displayName
        }));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);


  return (
    <div className="App">
      {user ? (
        <>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Sidebar />
          </ErrorBoundary>
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
