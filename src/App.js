// import { useState } from "react";

// import "./App.css";
// import Navbar from "./conponents/Navbar";
// import TextForm from "./conponents/TextForm";
// import Alert from "./conponents/Alert";

// import About from "./conponents/About";
// import BlogPost from "./conponents/BlogPost";
// import { Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Travel from "./conponents/Travel";

// function App() {
//   const [mode, setMode] = useState("light");
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   };

//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "grey";
//       document.body.style.color = "white";
//       showAlert("Dark mode have been enable ", "success");
//       document.title = "TextUtils - Dark mode";
//     } else {
//       setMode("light");
//       document.body.style.color = "black";

//       document.body.style.backgroundColor = "white";
//       showAlert("light mode have been enable ", "success");
//       document.title = "TextUtils - Light mode";
//     }
//   };

//   return (
//     <>
//       <Router>
//         <Navbar
//           navBar="TextUtils "
//           title="Places"
//           mode={mode}
//           toggleMode={toggleMode}
//         />
//         <Alert alert={alert} />
//         <div className="container">
//         <TextForm showAlert={showAlert} heading="Enter the text to analyze below"/>
       
//           <Routes>
        
           
//             <Route path="/about" element={<About />} />
//             <Route path="/blog" element={<BlogPost />} />
//             <Route path="/travel" element={<Travel/>} />
//            </Route>
//         </div>
//       </Router>

    
//     </>
//   );
// }

// export default App;



import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import BlogPost from "./components/BlogPost";
import Travel from "./components/Travel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode";
    } else {
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          navBar="TextUtils"
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" />} />
            <Route path="/blog" element={<BlogPost />} />
            <Route path="/travel" element={<Travel />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
