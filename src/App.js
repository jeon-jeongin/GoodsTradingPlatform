import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Post from "./routes/Post";
import User from "./routes/User";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/myPage" element={<User />} />
      </Routes>
    </Router>
  );
}
export default App;
