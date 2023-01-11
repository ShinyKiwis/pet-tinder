import "./styles/App.css";
import { AuthProvider } from "./providers/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
