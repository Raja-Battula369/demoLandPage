import { Suspense, lazy } from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

const RootLayout = lazy(() => import('./rootLayout'));
const Services = lazy(() => import('./components/services'));
const Home = lazy(() => import('./components/home'));
const Aboutus = lazy(() => import('./components/Aboutus'));
const Methodology = lazy(() => import('./components/Methodology'));
const Contact = lazy(() => import('./components/Contact'));
const Client = lazy(() => import('./components/Client'));

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

  return (
    <Suspense>
      <RouterProvider router={router} />;
    </Suspense>
  );
}

export default App;
