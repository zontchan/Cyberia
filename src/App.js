import './styles/css/main.css';

import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import Article from "./components/article/Article";
import ProjectCard from "./components/project_card/ProjectCard";

import {projects} from "./helpers/ProjectsList";
import MainProjects from "./pages/MainProjects";

function App() {
  return (
    <div className="App">
        <Header/>
        <MainProjects/>
        <Footer/>
    </div>
  );
}

export default App;

