import React, {useState, useEffect} from 'react';
import './App.css';
import Heading from './components/HeadingComponent';
import Form from './components/FormComponent';
function App() {
  return (
    <div className="App">
      <Heading>
        Welcome to React Composed Form
      </Heading>
      <Form>
        I am a composed reusable form
      </Form>
    </div>
  );
}

export default App;
