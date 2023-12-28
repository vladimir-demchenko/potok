import { servicesList } from '../../const/const'
import ServicesItem from '../ServicesItem/ServicesItem'

import cls from './ServicesList.module.scss'

export default function ServicesList() {
  return (
    <div className={cls.list}>
      {servicesList.map((service) => (
        <ServicesItem
          key={service.id}
          isDesc={service?.isDesc}
          isHover={service.isHover}
          title={service.title}
          description={service.description}
          url={service.url} />
      ))}
    </div>
  )
}