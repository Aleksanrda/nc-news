import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Articles from './components/Articles';
import NavigationBar from './components/NavigationBar'
import SingleArticle from './components/SingleArticle';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
      <Route path="/" element={<Articles />}></Route>
      <Route path="/topics/:topic" element={<Articles />}></Route>
      <Route path="/articles/:article_id" element={<SingleArticle />} />
      <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
