import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../Pages/App'

const GeneralRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default GeneralRoutes;