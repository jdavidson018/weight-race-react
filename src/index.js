import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom"; import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Users from './Pages/Users';
import User from './Components/User';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Reset from './Pages/Reset';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<Login />} index />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/reset" element={<Reset />} />
            <Route path="/dashboard" element={<App />}>
              <Route path=":userId" element={<User />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
