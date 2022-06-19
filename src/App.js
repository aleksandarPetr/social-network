import React  from 'react';
import './App.css';
import { Header } from "./components/Header";
import { Paragraph } from "./components/Paragraph";
import { Form } from "./components/Form";
import BackgroundImage from './assets/backgroundPhoto.jpeg';
import PersonData from "../src/data/PersonData";

function App() {
  return (
    <div className="App" style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `linear-gradient(to right, #ffffff 24%, #115E6780 90%), url(${BackgroundImage})`
    }}>
      <header className="App-left">
        <Header />
        <Paragraph />
        <Form data={PersonData} />
      </header>
    </div>
  );
}

export default App;
