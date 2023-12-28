import cls from './ScheduleItem.module.scss'

export default function ScheduleItem() {
  return (
    <div className={cls.scheduleCard}>
      <div className={cls.cardHeader}>
        <span className={cls.scheduleTime}>9:00</span>
        <span className={cls.divider}></span>
      </div>
      <div className={cls.content}>
        <p className={cls.scheduleDesc}>Йога гамак, тренер Кристина, начальный уровень.</p>
      </div>
    </div>
  )
}