
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DispatchManaingPage from './pages/DispatchManaingPage';
import LoginPage from './pages/LoginPage';

function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/dispatch" element={<DispatchManaingPage />} />
        <Route path="/signin" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
