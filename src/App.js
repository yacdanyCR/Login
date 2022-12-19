import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import IndexPage from './Pages/IndexPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/' element={<IndexPage />} />
      </Routes>
    </div>
  );
}

export default App;
