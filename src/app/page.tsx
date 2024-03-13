import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import About from "./components/About/about";
import Skill from "./components/Skill/skill"
import Project from "./components/Myproject/project"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Skill/>
      <Project/>
    </div>
  );
}
