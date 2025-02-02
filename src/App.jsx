import Header from "./components/Header";
import style from './app.module.css'
import SideBar from "./components/SideBar";
import { Post } from "./components/Post";

function App() {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <SideBar />
        <main><Post /></main>
      </div>
    </>
  );
}

export default App;
