import './avatar.css'

export default function Avatar({name}) {

  const src = './images/avatar/women-avatar.jpg'

  return (
    <>
        <picture className='avatar container'>
            <img className='avatar-img' src={src} alt="avatar" />
            <p className='name'>{name}</p>
        </picture>
    </>
  )
}
