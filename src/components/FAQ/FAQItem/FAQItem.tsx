import { useState } from 'react'
import cls from './FAQItem.module.scss'

export default function FAQItem() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={cls.questionBlock}>
      <div className={cls.question}>
        <p className={cls.questionText}>Как записаться на занятия? Нужна ли предварительная запись?</p>
        <button onClick={() => setIsActive((prev) => !prev)} className={cls.collapseBtn}>
          {isActive ? <span>?</span> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 17" fill="none">
            <path d="M13.5858 16.4142C14.3668 17.1953 15.6332 17.1953 16.4142 16.4142L29.1421 3.68629C29.9232 2.90524 29.9232 1.63891 29.1421 0.857864C28.3611 0.0768156 27.0948 0.0768156 26.3137 0.857864L15 12.1716L3.68629 0.857864C2.90524 0.0768156 1.63891 0.0768156 0.857864 0.857864C0.0768156 1.63891 0.0768156 2.90524 0.857864 3.68629L13.5858 16.4142ZM13 14V15H17V14H13Z" fill="white" />
          </svg>}
        </button>
      </div>
      {isActive && <div className={cls.answer}>
        <p className={cls.answerText}>Записаться на занятия можно у нашего администратора по тел или в вотсап +7-991-127-71-17 В группах ограниченное количество человек, поэтому предварительная запись обязятельна.</p>
      </div>}
    </div>
  )
}