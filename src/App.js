// import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Nav1 from './components/Nav/Nav1';
import Nav2 from './components/Nav/Nav2';
import Apps from './views/Homepage/Apps';
import Banner from './views/Homepage/Banner';
import BusinessSolutions from './views/Homepage/BusinessSolutions';
import EliteBanking from './views/Homepage/EliteBanking';
import LoanCalculator from './views/Homepage/LoanCalculator';
import Solutions from './views/Homepage/Solutions';
import Ticker from './views/Homepage/Ticker';
import Tools from './views/Homepage/Tools';
import Splashscreen from './views/Splashscreen';
import {Route, Switch, Redirect} from 'react-router-dom'
import Slider from './components/slider/Slider';
// import { Slider } from './components/slider/Slider';
// import { Slider } from './components';





/**
 * From this example
 * 
 * @see https://iddle254.github.io/sbm-done/
 * @returns 
 */

function App() {
  return (
    <div className='App'>
      {/* <Splashscreen /> */}
      <Slider />
      <Nav1 />
      <Nav2 />
      <Ticker />
      <BusinessSolutions />
      <EliteBanking />
      <LoanCalculator />
      <Tools />
      <Apps />
      <Footer />
      {/* <Solutions /> */}
       {/* <Banner /> */}
    </div>
  );
}

export default App;
