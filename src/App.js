// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';
import SharedLayout from './components/SharedLayout';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<Quote />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
