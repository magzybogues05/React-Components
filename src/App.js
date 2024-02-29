
import './App.css';
import TreeView from './components/tree-view';
import sideMenu from './components/tree-view/data';
// import Accordion from './components/accordion';
// import ImageSlider from './components/image-slider';
// import LoadMoreData from './components/load-more-data';
// import RandomColor from './components/random-color';
// import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">

      {/* 1. Accordion component */}
      {/* <Accordion/> */}


      {/* 2. Random Color component */}
      {/* <RandomColor/> */}


      {/* 3. Star Rating component */}
      {/* <StarRating noOfStars={10}/> */}


      {/* 4. Image Slider component - image from this url "https://picsum.photos/v2/list?page=1&limit=10" */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'}/> */}


      {/* 5. Load More Data component */}
      {/* <LoadMoreData/> */}


      {/* 6. Tree View Component / Menu ui/ Recursive Navigation Menu */}
      <TreeView menus={sideMenu}/>


    </div>
  );
}

export default App;
