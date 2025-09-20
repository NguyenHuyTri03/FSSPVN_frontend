import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home/home";
import CreatePost from "./pages/admin/post/post";
import Post from "./pages/post";
import Navigation from "./pages/components/nav";
import Footer from "./pages/components/footer";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/post" element={<CreatePost />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;