import React from 'react';
import Top from './screens/Top';
import Navbar from './components/Navbar';
import Quiz from './screens/Quiz';

function App() {
  return ( //
    <div className="App">
      <Navbar />
      <Top />
      <Quiz />
      {/* <Top></Top> */}
      //
    </div>
  );
}

export default App;
