import { BrowserRouter, Route, Routes } from "react-router";
import * as PropTypes from "prop-types";
import { MainPage } from "./bibleMain/MainPage.jsx";

MainPage.propTypes = { children: PropTypes.node };

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={} />
        </Routes>
      </BrowserRouter>
      <div>frontend</div>
    </>
  );
}

export default App;
