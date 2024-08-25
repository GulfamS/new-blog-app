import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import BlogList from "./components/BlogsList";
import AboutBlogDetails from "./components/AboutBlogDetails";

const App = () =>(
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<BlogList/>}/>
      <Route path="/about" element={<AboutBlogDetails/>}/>
    </Routes>
  </Router>
)

export default App;
