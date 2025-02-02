import style from './index.module.css'

const Avatar = ({hasBorder = true, src}) => {
  return (
    <img className={hasBorder ? style.avatarWithBorder : style.avatar} src={src} />
  )
}

export default Avatar
