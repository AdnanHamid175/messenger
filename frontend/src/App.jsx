import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatPage from "./Pages/ChatPage";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chats" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
