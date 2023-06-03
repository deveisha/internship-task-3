import Dashboard from "./components/Dashboard";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useNavigationType,
} from "react-router-dom";
import { ThemeProvider, createTheme, colors } from "@mui/material";
import Login from "./components/Login";
import Cookies from "universal-cookie";
import React, { useEffect } from "react";
import SignUp from "./components/Signup";
import Context from './components/Context'
const theme = createTheme({
  palette: {
    secondary: {
      main: colors.orange[500],
    },
  },
});

function App() {

  const { signupData, updateSignupData } = React.useContext(Context);


  
const navigate=useNavigate()
  // React.useEffect(() => {

  //    console.log(localStorage.getItem("login"));
  //   if (
  //     !localStorage.getItem("login")
  //   ) {
  //     console.log("abc");
  //     navigate("/");
  //   } else {
  //     navigate("/navbar");
  //   }
  // }, [localStorage.getItem("login")]);

  return (
    <div className="App">
      <br /> <br />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          </Routes>
          <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/dashboard" element={<><Dashboard /> <Navbar/></>} />
          <Route path="/signup" element={<SignUp/>}/>
          </Routes>
          
        
      </ThemeProvider>
    </div>
  );
}

export default App;
