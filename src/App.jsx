import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import CreatePage from './pages/CreatePage.jsx';
import NavBar from './components/NavBar.jsx';
import HomePage from './pages/HomePage.jsx';
import CrewList from './pages/CrewList.jsx';
import EditPage from './pages/EditPage.jsx';

function App() {
  return (
    <Router>
      <div className="NavBar">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Create" element={<CreatePage />} />
        <Route path="/CrewList" element={<CrewList />} />
        <Route path="/Edit:id" element={<EditPage />} />

      </Routes>
    </Router>
  );
}

export default App;