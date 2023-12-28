import { Button, Col, ConfigProvider, Form, Input, Row } from 'antd'
import cls from './TrialForm.module.scss'

export default function TrialForm() {
  return (
    <div className={cls.trialSection}>
      <div className="container">
        <h2 className={cls.title}>
          ЗАПИШИСЬ НА ЗАНЯТИЕ ПРЯМО СЕЙЧАС!
        </h2>
        <p className={cls.desc}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
        <div className={cls.form}>
          <ConfigProvider
            theme={{
              token: {
                fontFamily: 'Inter',
                controlHeight: 70,
                borderRadius: 17
              },
              components: {
                Form: {
                  labelColor: '#fff',
                  labelFontSize: 24,
                  labelColonMarginInlineEnd: 0
                }
              }
            }}
          >
            <Form name='trial'>
              <Row gutter={60} justify={'center'} align={'bottom'}>
                <Col span={6}>
                  <Form.Item label='Как вас зовут?' name='name' labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label='E-mail:' name='email' labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label='Номер телефона:' name='phone' labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item>
                    <Button className={cls.btn}>Записаться</Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </ConfigProvider>
        </div>
      </div>
    </div>
  )
}