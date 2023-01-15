import "./styles/App.css";
import { AuthProvider } from "./providers/AuthProvider";
import { ModalProvider } from "./providers/ModalProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Loved, Profile, Community, Settings } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/loved" element={<Loved />} />
            <Route path="/community" element={<Community />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <Navbar />
        </BrowserRouter>
      </ModalProvider>
    </AuthProvider>
  );
}

export default App;
