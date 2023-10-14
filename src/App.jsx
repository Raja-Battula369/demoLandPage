import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import RootLayout from './rootLayout';
import Services from './components/services';
import Home from './components/home';
import Aboutus from './components/Aboutus';
import Methodology from './components/Methodology';
import Contact from './components/Contact';
import Client from './components/Client';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/client" element={<Client />} />
        <Route path="*" element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
