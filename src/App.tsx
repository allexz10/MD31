import { Routes, Route, Link } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Houses from './pages/Houses';
import Charecters from './pages/Charecters';

import './App.scss';

const App = () => (
  <>

    <Routes>
      <Route path="/" element={<Houses />} />
      <Route path="/houses" element={<Houses />} />
      <Route path="/charecters/" element={<Charecters />} />
      <Route path="/charecters/:slug" element={<Charecters />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
