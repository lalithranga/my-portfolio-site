import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";

function App() {
  return (
    <>
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 -z-10"></div>

      {/* Main App with Routing */}
      <BrowserRouter>
        <div className="relative min-h-screen p-3 text-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<h1 className="text-2xl">About</h1>} />
            <Route path="/contact" element={<h1 className="text-2xl">Contact</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
