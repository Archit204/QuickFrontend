// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './Pages/HomePage';
// import ProfilePage from './Pages/ProfilePage';
// import NotFound from './Pages/NotFound';
// import './App.css'
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/show-profile/:id" element={<ProfilePage />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
// import ProfilePage from './Pages/ProfilePage';
import Generate from './Component/Generate'
import About from './Component/About';
import Contact from './Component/Contact';
import Auth from "./Component/Auth"
import Signup from './Pages/Signup';
import Login from './Component/Login';
import Scan from './Component/Scan';
import Showdetail from './Component/Showdetail';
import ProfilePage from './Pages/ProfilePage'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/users/show-profile/:id" element={<ProfilePage />} /> */}
        <Route path="/generate" element={ <Generate></Generate>} />
        <Route path="/about" element={ <About></About>} />
        <Route path="/contact" element={ <Contact></Contact>} />
        {/* <Route path="/auth" element={ <Auth></Auth>} /> */}
        <Route path="/signup" element={ <Signup></Signup>} />
        <Route path="/login" element={ <Login></Login>} />
        <Route path="/scan" element={ <Scan></Scan>} />
        <Route path="/showdetail" element={ <Showdetail></Showdetail>} />
        <Route path="*" element={<NotFound />} />
 {/* <Route path="/profile" element={<ProfilePage />} /> */}

        {/* <Route path="/generate" element={<GeneratePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;