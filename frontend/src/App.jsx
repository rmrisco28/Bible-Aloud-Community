import { BrowserRouter, Route, Routes } from "react-router";
import { SharingList } from "./Sharing/SharingList.jsx";
import { SharingAdd } from "./Sharing/SharingAdd.jsx";
import { SharingContent } from "./Sharing/SharingContent.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="sharing/list" element={<SharingList />} />
          <Route path="sharing/add" element={<SharingAdd />} />
          <Route
            path="sharing/content/:assessmentId"
            element={<SharingContent />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
