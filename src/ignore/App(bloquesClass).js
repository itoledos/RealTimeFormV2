import logo from './logo.svg';
import './App.css';
import Header from '../components/form/Header';
import Navigation from '../components/form/Navigation';
import Main from '../components/form/Main';
import SubContent from '../components/form/SubContent';
import Advertisement from '../components/form/Advertisement';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Main>
        <SubContent/>
        <SubContent/>
        <SubContent/>
        <Advertisement/>
      </Main>
    </div>
  );
}

export default App;
