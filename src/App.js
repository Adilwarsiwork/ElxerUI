import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Page from "./Component/Common/Page";
import Plans from "../src/Component/Plans/Plans.js";

import "./App.css";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Page val={"Home"} />} />
          <Route path="/corporate" element={<Page val={"Business"} />} />
          <Route path="/packages" element={<Plans />} />
          <Route path="/support" element={<Page val={"Support"} />} />
          <Route path="/contact" element={<Page val={"Contact Us"} />} />
          <Route
            path="/pay-recharge"
            element={<Page val={"Pay & Recharge"} />}
          />
          <Route
            path="/new-connection"
            element={<Page val={" New Connection"} />}
          />
          <Route path="/career" element={<Page val={"We're Hiring"} />} />
          <Route path="/custumer" element={<Page val={"Customer Portal"} />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
