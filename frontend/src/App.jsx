import { BrowserRouter, Route, Routes } from "react-router";
import { Sharing } from "./Sharing.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="sharing" element={<Sharing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
