

import Favorites from './components/Favorites';
import SneakersList from  "./components/SneakersList"

import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
function App() {

  return (
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route path='/' element={ <SneakersList />   }/>
        <Route path='/favorites' element={ <Favorites/>   }/>
      </Routes>
    </div>
  );
}


export default App;
