
import {actions,orginals} from './urls'

import "./App.css";
import RowPost from './components/RowPost/RowPost';
import Banner from './components/navbar/Banner/Banner';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='App'>
     <Navbar/>
     <Banner/>
     <RowPost url={orginals} title='Netflix Orginals'/>
     <RowPost url={actions} title='Action' isSmall/>
    </div>
  );
}

export default App;
