import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/PlaneCreate';
import Details from './components/Details';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  View,
  Card,
} from "@aws-amplify/ui-react";
import PlaneCreate from './components/PlaneCreate';

function App({ signOut }) {
  return (
    
    <BrowserRouter>
    <View className="App">
    </View>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/plane-details" element={<Details />} />
        <Route path="/create-my-plane" element={<PlaneCreate />} />
      </Routes>
    </BrowserRouter>
  );
}
export default withAuthenticator(App);