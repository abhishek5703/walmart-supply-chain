import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Sellers from './pages/Sellers'; 
import PrivateRoute from './components/PrivateRoute';
import SellerProfile from "./pages/SellerProfile"; 

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#333',
            border: '1px solid #e2e8f0',
            padding: '10px 16px',
            borderRadius: '8px',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/sellers"
          element={
            <PrivateRoute>
              <Sellers />
            </PrivateRoute>
          }
        />
        <Route
          path="/seller/:id"
          element={
            <PrivateRoute>
              <SellerProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
