import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import  Avatar  from '../Avatar/index';
import styles from './index.module.css';



export function Post({author, publishedAt, content}) {

  const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  } )

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtDateFormatted}  dateTime={publishedAt.toISOString()} >
        {publishedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
       {content.map((contents) => {
        if(contents.type === "paragraph"){
          return <p>{contents.content}</p>
        }else if(contents.type === "link"){
          return <a href='#'>{contents.content}</a>
        }
       })}
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
