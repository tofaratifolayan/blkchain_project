import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage';
import PianoPlayer from './pages/pianoPlayer';
import BouncingBall from './pages/BouncingBall';
import RandomColors from './pages/RandomColors';
import NumberGuesser from './pages/NumberGuesser'

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          {/* <Route path='/PianoPlayer' element={<PianoPlayer/>}></Route>
          <Route path='/BouncingBall' element={<BouncingBall/>}></Route>
          <Route path='/RandomColors' element={<RandomColors/>}></Route>
          <Route path='/NumberGuesser' element={<NumberGuesser/>}></Route> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
