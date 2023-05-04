// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';
import SharedLayout from './components/CalculatorDisplay';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<Quote />} />
      </Route>
    </Routes>
  );
}

export default App;
