import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Homepage from './homepage';
import Book from './book';
import Chapter from './chapter';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />}>
        </Route>
        <Route exact path="/:selectedBook" element={<Book />}>
        </Route>
        <Route exact path="/:selectedBook/:selectedChapter" element={<Chapter />}>
        </Route>
      </Routes>    
    </Router>
  );
}

export default App;
