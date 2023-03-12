import './App.css';
import Header from './Navigation/Header';
import Main from './Pages/Main';
import { useEffect } from 'react';

function App() {
  useEffect(() =>{
    document.documentElement.scrollTop =0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  return (
    <div className="App">
      <Header />
      <Main/>
    </div>
  );
}

export default App;
