
import {HashRouter,Route,Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import CreateWallet from './pages/createWallet';
import Wallet from './pages/walletPage';

function App() {
  return (
     <HashRouter>
       <Routes>
        <Route path='/' element= {<Dashboard/>}/>
        <Route path='/create' element= {<CreateWallet/>}/>
        <Route path='/wallet' element= {<Wallet/>}/>
       </Routes>
     </HashRouter>
  )
}

export default App
