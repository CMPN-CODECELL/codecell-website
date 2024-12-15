import React, { useEffect, useState } from "react";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Team from "./pages/Team/Team";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/misc/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={loading ? <Loading /> : <Landing />} />
        <Route path="/team" element={loading ? <Loading /> : <Team />} />
        <Route path="*" element={<Loading />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        draggablePercent={50}
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
