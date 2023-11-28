import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import {NoPage} from './pages/NoPage';
import { PublicLayout } from './layout/PublicLayout';
import { LoginPage } from './pages/LoginPage';
import { LogOutPage } from './pages/LogOutPage';
import { AccountPage } from './pages/AccountPage';
import { ContextWrapper } from './context/GlobalContext';
import { LogInLayout } from './layout/LogInLayout';

function App() {
  return (
    <>
    <ContextWrapper>
        <BrowserRouter>
        <Routes>
          <Route Component={PublicLayout}>
            <Route index path='/' element={<HomePage />} />
            <Route path='/logout' element={<LogOutPage />} />
            <Route path='/account' element={<AccountPage />} />
            <Route path='*' element={<NoPage/>} />
          </Route>
            <Route Component={LogInLayout}>
            <Route path='/login' element={<LoginPage />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </ContextWrapper>
</>)
}

export default App;

