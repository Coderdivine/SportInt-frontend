import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link }  from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import LoginPage from './Pages/LoginPage';
import VerificationPage from './Pages/VerificationPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
      <div>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/profile' element={<ProfilePage/>} />
          <Route   path='/login' element={<LoginPage/>} />
          <Route   path='/register' element={<RegisterPage/>} />
          <Route   path='/verify-email' element={<VerificationPage/>} />
          <Route />
        </Routes>
      </div>
  );
}

export default App;
