import React, {useState, useEffect} from 'react';
import './App.css';
import Heading from './components/HeadingComponent';
import Form from './components/FormComponent';
import InputElement from './components/InputElementComponent'; 
import Button from './components/ButtonComponent';
function App() {

  const [dish, setDish] = useState ('')

  const handleDish = (event) => {
    setDish (event.target.value);
  }

  return (
    <div className="App">
      <Heading>
        Welcome to React Composed Form
      </Heading>
      <Form>
         <React.Fragment>
            <InputElement id="dish" onInputchange={handleDish}>
                Enter your favorite dish:
            </InputElement>
            <Button
            type='submit'
            >
              save your dish
            </Button>
         </React.Fragment>
      </Form>
    </div>
  );
}

export default App;
