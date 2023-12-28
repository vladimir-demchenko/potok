import cls from './DetailPageForm.module.scss'
import { Form, Input, Button, ConfigProvider } from 'antd';

export default function DetailPageForm() {
  return (
    <div className={cls.card}>
      <h3 className={cls.title}>Заполните форму и запишитесь на первое занятие:</h3>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'Inter',
            controlHeight: 70,
            borderRadius: 17
          }
        }}
      >
        <Form name='first' className={cls.form}>
          <Form.Item>
            <Input placeholder='Имя' />
          </Form.Item>
          <Form.Item>
            <Input placeholder="E-mail" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Телефон" />
          </Form.Item>
          <Form.Item>
            <Button className={cls.btn}>Записаться на занятие</Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
      <p className={cls.subtext}>Записываясь, вы соглашаетесь с политикой
        конфеденциальности</p>
    </div>
  )
}