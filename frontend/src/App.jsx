import { BrowserRouter, Route, Routes } from "react-router";
import { SharingList } from "./Sharing/SharingList.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="sharing/list" element={<SharingList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
