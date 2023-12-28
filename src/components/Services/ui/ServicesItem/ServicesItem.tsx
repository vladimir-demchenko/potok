import cls from './ServicesItem.module.scss';
import { useState } from 'react';

interface ServicesItemProps {
  isHover: boolean;
  isDesc?: boolean
  title: string;
  description: string;
  url: string;
}

export default function ServicesItem({ title, description, url, isHover, isDesc = true }: ServicesItemProps) {
  const [isShown, setIsShown] = useState(isHover ? false : true);

  return (
    <div
      onMouseEnter={() => isHover ? setIsShown(true) : null}
      onMouseLeave={() => isHover ? setIsShown(false) : null}
      className={cls.card} style={{ background: `url(${url}) center center/cover no-repeat` }}>
      <div className={cls.content}>
        <h3 className={cls.title}>
          {title}
        </h3>
        {isShown && isDesc && (
          <p className={cls.description}>{description}</p>
        )}
        <div className={cls.footer}>
          <button onClick={() => location.href = '/aero'} className={cls.button}>
            ПОДРОБНЕЕ
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
              <path d="M8.39476 8.37386C8.78529 7.98333 8.78529 7.35017 8.39476 6.95964L2.0308 0.595679C1.64028 0.205154 1.00711 0.205154 0.616587 0.595678C0.226062 0.986203 0.226062 1.61937 0.616587 2.00989L6.27344 7.66675L0.616587 13.3236C0.226062 13.7141 0.226062 14.3473 0.616586 14.7378C1.00711 15.1283 1.64028 15.1283 2.0308 14.7378L8.39476 8.37386ZM7 8.66675L7.68765 8.66675L7.68765 6.66675L7 6.66675L7 8.66675Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}