
import './App.css';
import Home from './Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SingleMovie from './SingleMovie';
import Error from './Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<SingleMovie />}/>
        <Route path='*' element={<Error />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
