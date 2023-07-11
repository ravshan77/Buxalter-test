import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './utils/ThemeContext';
import App from './App';
import { store } from './store';
import Loading from "./components/Loading"
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { persistStore } from "redux-persist";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const persistor = persistStore(store);


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate  loading={<Loading />} persistor={persistor}>
        <Router>
          <ThemeProvider>
            <App />
            <ToastContainer />
          </ThemeProvider>
        </Router>
      </PersistGate>  
    </Provider>
  // </React.StrictMode>
);
