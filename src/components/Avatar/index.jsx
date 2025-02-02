import style from './index.module.css'

const Avatar = ({hasBorder = true, src}) => {
  return (
    <img className={style.avatar} src={src} />
  )
}

export default Avatar
