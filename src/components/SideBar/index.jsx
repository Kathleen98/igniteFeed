import Avatar from "../Avatar";
import style from "./index.module.css";

const SideBar = () => {
  return (
    <aside className={style.sidebar}>
      <img
      className={style.cover}
        src="https://i.pinimg.com/736x/c1/f4/5f/c1f45f1978fc7ad515497a5c64605d7f.jpg"
        alt=""
      />
      <div className={style.profile}>
        <Avatar src={"https://github.com/kathleen98.png"} />
        <strong>Kathleen Santos</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
};

export default SideBar;
