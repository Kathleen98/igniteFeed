import styles from "./index.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import Avatar from "../Avatar/index";

export function Comment({ content, deleteComment, addLike, like }) {
  const handleDeleteComment = () => {
    deleteComment(content);
  };

  return (
    <div className={styles.comment}>
      <Avatar src={"https://github.com/kathleen98.png"} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Kathleen Santos</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={addLike}>
            <ThumbsUp />
            Aplaudir <span>{like}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
