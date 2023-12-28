import cls from './Contacts.module.scss'

export default function Contacts() {
  return (
    <div className={cls.contacts}>
      <h2 className={cls.title}>Контакты:</h2>
      <p className={cls.subtext}>по телефону</p>
      <a href="tel:+7(991)127-71-17" className={cls.contacts__phone}>
        <img className={cls.phone_icon} src="/icons/phone_white.png" />
        <span className={cls.phone_link}>+7(991)127-71-17</span>
      </a>
      <p className={cls.subtext}>или в соц сетях</p>
      <div className={cls.social}>
        <a href=""><img className={cls.socialIcons} src="/icons/vk.png" alt="vk" /></a>
        <a href=""><img className={cls.socialIcons} src="/icons/whatsapp.png" alt="whatsapp" /></a>
      </div>
    </div>
  )
}