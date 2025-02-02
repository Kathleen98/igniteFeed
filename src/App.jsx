import Header from "./components/Header";
import style from './app.module.css'
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <SideBar />
        <main>feed</main>
      </div>
    </>
  );
}

export default App;
