import cls from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={`${cls.footer} container`}>
      <div className={cls.upperSection}>
        <div className={cls.infoBlock}>
          <p className={cls.title}>Позвонить нам:</p>
          <a className={cls.phone} href="tel:+79911277117">+7(991)127-71-17</a>
        </div>
        <div className={cls.infoBlock}>
          <p className={cls.title}>Адрес студии:</p>
          <p className={cls.address}>‌мкр Родники, дом 7, Силикатная</p>
        </div>
        <div className={cls.socials}>
          <a href=""><img className={cls.socialIcons} src="/icons/vk.png" alt="vk" /></a>
          <a href=""><img className={cls.socialIcons} src="/icons/whatsapp.png" alt="whatsapp" /></a>
        </div>
      </div>
      <span className={cls.divider}></span>
      <div className={cls.bottomSection}>
        <div className={cls.docLinks}>
          <ul className={cls.docList}>
            <li className={cls.docItem}>Правила посещения</li>
            <li className={cls.docItem}>Публичная оферта</li>
          </ul>
        </div>
        <div className={cls.navLinks}>
          <ul className={cls.nav_list}>
            <li className={cls.nav_item}><a className={cls.nav_link} href="">Услуги</a></li>
            <li className={cls.nav_item}><a className={cls.nav_link} href="">Цены</a></li>
            <li className={cls.nav_item}><a className={cls.nav_link} href="">Расписание</a></li>
          </ul>
        </div>
        <div className={cls.promo}>
          <p className={cls.promoText}>Платите быстро с</p>
          <img className={cls.promoImg} src='icons/sbp.png' alt='sbp' />
        </div>
      </div>
    </div>
  )
}