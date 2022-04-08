import { Home } from "./views/Home";
import { Routes, Route } from "react-router-dom";
import { EmailRequest } from "./views/EmailRequest";

function App() {
  return (
    <Routes>
      <Route path="/book/:bookId" element={<EmailRequest />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
