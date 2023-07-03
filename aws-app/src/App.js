import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import About from './components/About';
import Login from './components/Login';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { withAuthenticator} from '@aws-amplify/ui-react'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports)
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Authenticator>
            {({ signOut, user }) => (
                <div>
                    <p>Welcome {user.username}</p>
                    <button onClick={signOut}>Sign out</button>
                </div>
            )}
        </Authenticator>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default withAuthenticator(App);