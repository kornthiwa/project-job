import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error, Landing, Register,ProtectedRoute } from './pages';
import { ToastContainer } from 'react-toastify';
import { AllJobs, Profile, SharedLayout, Stats, AddJob } from './pages/Dashboard/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute><SharedLayout /></ProtectedRoute>}>
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='register' element={<Register />} />
        <Route path='landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}

export default App;
