import React , {useStaet} from 'react';
import Header from './Components/Header';
import './App.css'
import SearchAndSelect from './Components/SearchAndSelect';
import Country from './Components/Country';
import {Routes,Route} from 'react-router-dom';
import CountryDetails from './Components/CountryDetails';
function App() {
  const switchMode = () => {
    
  }
  return (
    <>
    <Header onClick={switchMode}/>
    <Routes>
      <Route path='/' element={ <div className='app_body'>
    <SearchAndSelect/>
    <div className="countries">
    <Country/>
        </div>
    
    
    </div>
 }
  />
  <Route path='/country-details' element={<CountryDetails/>}/>

    </Routes>
      </>
    );
}

export default App;
