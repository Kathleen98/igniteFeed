import  Avatar  from '../Avatar/index';
import styles from './index.module.css';



export function Post() {


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/kathleen98.png" />
          <div className={styles.authorInfo}>
            <strong></strong>
            <span></span>
          </div>
        </div>

        <time  >
        
        </time>
      </header>

      <div className={styles.content}>
       
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          required
        />

        <footer>
          <button type="submit" >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
      
      </div>
    </article>
  )
}
