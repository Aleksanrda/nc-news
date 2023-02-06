import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Articles from './components/Articles';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Articles />}></Route>
      </Routes>
    </div>
  );
}

export default App;
