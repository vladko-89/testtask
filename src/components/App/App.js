import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from '../../pages/home-page/home-page'
import ExamplePage from '../../pages/example-page/example-page'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path='/example' element={<ExamplePage/>} />
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </main>
      <Footer />

      
    </div>
  );
}

export default App;
