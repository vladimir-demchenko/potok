import FAQItem from '../FAQItem/FAQItem';

import cls from './FAQList.module.scss'

export default function FAQList() {
  return (
    <div className={`container`}>
      <h2 className={cls.title}>Часто задаваемы вопросы</h2>
      <span className={cls.divider}></span>
      <div className={`${cls.list}`}>
        <FAQItem />
        <FAQItem />
        <FAQItem />
        <FAQItem />
      </div>
    </div>
  )
}