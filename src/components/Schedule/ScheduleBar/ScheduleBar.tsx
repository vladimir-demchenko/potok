import { ConfigProvider, Radio } from 'antd';

import cls from './ScheduleBar.module.scss'

export default function ScheduleBar() {
  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <ConfigProvider
        theme={{
          components: {
            Radio: {
              buttonColor: '#00A3FF',
              buttonSolidCheckedBg: '#00A3FF',
            }
          }
        }}
      >
        <Radio.Group size='large' className={cls.group} defaultValue={'a'} buttonStyle='solid'>
          <Radio.Button className={cls.btn} value={'a'}>Понедельник</Radio.Button>
          <Radio.Button className={cls.btn} value="b">Вторник</Radio.Button>
          <Radio.Button className={cls.btn} value="c">Среда</Radio.Button>
          <Radio.Button className={cls.btn} value="d">Четверг</Radio.Button>
          <Radio.Button className={cls.btn} value="e">Пятница</Radio.Button>
        </Radio.Group>
      </ConfigProvider>
    </div>
  )
}