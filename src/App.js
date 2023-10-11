import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotesList from "./components/NotesList";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import CreateNote from "./components/CreateNote";
import NoteDetails from "./components/NoteDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route exact path="/" Component={NotesList} />
            <Route path="/createNote" Component={CreateNote} />
            <Route path="/notes/:id" Component={NoteDetails} />
            <Route path="/notes/edit/:id" Component={CreateNote} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
