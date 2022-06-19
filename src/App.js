import React  from 'react';
import './App.css';
import { Header } from "./components/Header";
import { Paragraph } from "./components/Paragraph";
import { Form } from "./components/Form";
import PersonData from "../src/data/PersonData";

function App() {
  return (
    <div className="App" style={{
        backgroundColor: "white"
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
