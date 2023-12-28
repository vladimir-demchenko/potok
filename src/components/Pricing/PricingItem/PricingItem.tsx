import cls from './PricingItem.module.scss'

export default function PricingItem() {
  return (
    <div className={cls.card}>
      <h3 className={cls.title}>Абонемент на 4 занятия</h3>
      <p className={cls.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
      <p className={cls.price}>3000 Р</p>
      <button onClick={() => location.href = '/payment'} className={cls.button}>ОПЛАТИТЬ</button>
    </div>
  )
}