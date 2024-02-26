
import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">

      {/* 1. Accordion component */}
      {/* <Accordion/> */}


      {/* 2. Random Color component */}
      {/* <RandomColor/> */}

      {/* 3. Star Rating component */}
      <StarRating noOfStars={10}/>


    </div>
  );
}

export default App;
