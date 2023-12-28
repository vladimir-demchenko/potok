import PricingItem from '../PricingItem/PricingItem'
import cls from './PricingList.module.scss'
import { useState } from 'react';

export default function PricingList() {
  const [groupFilter, setGroupFilter] = useState('1')
  const [posFilter, setPosFilter] = useState('1')

  return (
    <div className={`${cls.content} container`}>
      <h2 className={cls.title}>
        Стоимость и оплата:
      </h2>
      <div className={cls.filterGroup}>
        <button onClick={() => setGroupFilter('1')} className={`${cls.groupBtn} ${groupFilter === '1' ? cls.groupBtn_active : null}`}>Индивидуальные занятия</button>
        <button onClick={() => setGroupFilter('2')} className={`${cls.groupBtn} ${groupFilter === '2' ? cls.groupBtn_active : null}`} >Групповые занятия</button>
      </div>
      <div className={cls.filterPos}>
        <button onClick={() => setPosFilter('1')} className={`${cls.posBtn} ${posFilter === '1' ? cls.posBtn_active : null}`}>Аэро-Йога</button>
        <button onClick={() => setPosFilter('2')} className={`${cls.posBtn} ${posFilter === '2' ? cls.posBtn_active : null}`}>Аэро-Йога</button>
        <button onClick={() => setPosFilter('3')} className={`${cls.posBtn} ${posFilter === '3' ? cls.posBtn_active : null}`}>Аэро-Йога</button>
        <button onClick={() => setPosFilter('4')} className={`${cls.posBtn} ${posFilter === '4' ? cls.posBtn_active : null}`}>Аэро-Йога</button>
        <button onClick={() => setPosFilter('5')} className={`${cls.posBtn} ${posFilter === '5' ? cls.posBtn_active : null}`}>Аэро-Йога</button>
      </div>
      <div className={cls.list}>
        <PricingItem />
        <PricingItem />
        <PricingItem />
      </div>
    </div>
  )
}