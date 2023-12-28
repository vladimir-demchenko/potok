import cls from './Header.module.scss';

export default function Header() {
  return (
    <>
      {/* <div className={cls.svg_container}>
        <svg
          // style={{ display: 'block' }}
          className={cls.header_vector}
          viewBox="0 0 1920 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 1316 159 C 1401.2 141.8 1754.17 131.833 1920 121 V 120 H 1 V 121.5 H 303.5 C 434.167 126.167 718.9 140.2 812.5 159 C 929.5 182.5 1209.5 180.5 1316 159 Z"
            fill="#00A2F4"
          />
        </svg>

        <svg
          // style={{ display: 'block' }}
          className={cls.header_vector}
          viewBox="0 0 1923 168"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1501.39 158.978C1340.95 136.301 1081.78 132.014 972.253 132.706H1V1H1922V132.706C1848.65 150.912 1661.83 181.655 1501.39 158.978Z"
            fill="white"
          />
        </svg>
      </div> */}
      <header className={`${cls.header}`}>
        <div className={`${cls.header__content} container`}>
          <img className={cls.logo} alt='logo' src="/icons/logo.png" />
          <nav className={cls.nav}>
            <ul className={`${cls.nav__list} ${cls.list_reset}`}>
              <li className={cls.nav__item}><a className={cls.nav__link} href="/#main_content">УСЛУГИ</a></li>
              <li className={cls.nav__item}><a className={cls.nav__link} href="#">РАСПИСАНИЕ</a></li>
              <li className={cls.nav__item}><a className={cls.nav__link} href="#">ЦЕНЫ</a></li>
              <li className={cls.nav__item}><a className={cls.nav__link} href="#">F.A.Q.</a></li>
              <li className={cls.nav__item}><a className={cls.nav__link} href="#">КОНТАКТЫ</a></li>
            </ul>
          </nav>
          <div className={cls.header__info}>
            <a href="tel:+7(991)127-71-17" className={cls.header__phone}>
              <img className={cls.phone_icon} src="/icons/phone.png" />
              <span className={cls.phone_link}>+7(991)127-71-17</span>
            </a>
            <button className={cls.header__btn}>Вход</button>
          </div>
        </div>
      </header></>
  )
}