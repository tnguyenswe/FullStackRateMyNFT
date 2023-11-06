/** @jsxImportSource theme-ui */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Reviews from './pages/reviews';
import CreateReviews from './pages/createReview';
import { Image } from 'theme-ui';
import Ellipse from './assets/ellipse.png';
import PFP from './assets/userPFP.jpeg';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Image sx={{position: 'absolute', top: '0', right:'0', zIndex: '-1'}} src={Ellipse}/>
        <NavBar userImage={PFP}/>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/RateMyNFT" element={<App/>} />
          <Route path="/reviews/:id" element={<Reviews/>}/>
          <Route path="/createReview/:id" element={<CreateReviews/>}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
