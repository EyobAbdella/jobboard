import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Google from "./pages/Google";
import Verify from "./pages/Verify";
import Activate from "./pages/Activate";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='verify' element={<Verify />} />
        <Route path='google' element={<Google />} />
        <Route path='activate/:uid/:token' element={<Activate />} />
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/jobs' element={<Jobs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
