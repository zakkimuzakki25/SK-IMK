import { Route, Routes } from 'react-router-dom';
import Login from '/src/pages/auth/Login';
// import Register from '/src/pages/auth/Register';

const MainRoute = () => {
    return (
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </div>
    );
  };
  
  export default MainRoute;