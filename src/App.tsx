import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Houses from './pages/Houses';
import Characters from './pages/Characters';

import './App.scss';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Houses />} />
      <Route path="/houses" element={<Houses />} />
      <Route path="/character/" element={<Characters />} />
      <Route path="/character/:slug" element={<Characters />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
