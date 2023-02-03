import "./styles/App.css";
import { AuthProvider } from "./providers/AuthProvider";
import { ModalProvider } from "./providers/ModalProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Loved, Profile, Community, Settings, Adoption } from "./pages";
import { Navbar } from "./components";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/loved" element={<Loved />} />
              <Route path="/community" element={<Community />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/adoption/:petID" element={<Adoption />} />
            </Routes>
            <Navbar />
          </BrowserRouter>
        </QueryClientProvider>
      </ModalProvider>
    </AuthProvider>
  );
}

export default App;
