import logo from './logo.svg';
import './App.scss';
import Header from './Sections/Header';
import Footer from './Sections/Footer';
import Home from './Sections/Home';
import Sidebar from './Sections/Sidebar';

function App() {
  return (
    <div className='outer_wrapper'>
      <Header />
      <div className='hs_wrapper'>
        <Sidebar />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
