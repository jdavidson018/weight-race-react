import './App.css';
import React, { useEffect } from "react";
import CollapsableNavigationDrawer from './Components/CollapsableNavigationDrawer';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Services/firebase";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, loading] = useAuthState(auth);
  const history = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) history("/");
  }, [user, loading, history]);

  return (
    <div className="App">
      <CollapsableNavigationDrawer></CollapsableNavigationDrawer>
    </div>
  );
}

export default App;
