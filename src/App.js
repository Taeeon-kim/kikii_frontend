import './App.css';
import { Route, Routes } from 'react-router-dom';
import DispatchManaingPage from './pages/DispatchManaingPage';
import LoginPage from './pages/LoginPage';
import Permit from './utils/Permit';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/dispatch"
          element={
            <Permit>
              <DispatchManaingPage />
            </Permit>
          }
        />
        <Route path="/signin" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
