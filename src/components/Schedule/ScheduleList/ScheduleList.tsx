import ScheduleItem from '../ScheduleItem/ScheduleItem';

import cls from './ScheduleList.module.scss'

export default function ScheduleList() {
  return (
    <div className={cls.list}>
      <ScheduleItem />
      <ScheduleItem />
      <ScheduleItem />
      <ScheduleItem />
    </div>
  )
}