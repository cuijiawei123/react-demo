import {Card, Form, Input, Button, message} from 'antd'
import logo from '@/assets/logo.png'
import useStore from '@/store'
import { fetchLogin } from '@/store/modules/user'
import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom";

const Login = () => {
    const dispath = useDispatch();
    const navigate = useNavigate()

    const onFinish = async formData => {
        await dispath(fetchLogin(formData))
        navigate('/')
        message.success('登录成功')
    }


    return (
        <div className="w-full h-full absolute left-0 right-0 bg-center bg-cover">
            <Card
                className="w-[440px] h-[360px] absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] shadow-3xl">
                <img className="w-[200px] h-[60px] block mx-auto mt-0 mb-[20px]" src={logo} alt=""/>
                <Form validateTrigger={['onBlur']}  onFinish={ onFinish }>
                    <Form.Item name="mobile" rules={[
                        {required: true, message: '请输入手机号'},
                        {
                            pattern: /^1[3-9]\d{9}$/,
                            message: '手机号码格式不对'
                        }
                    ]}>
                        <Input size="large" placeholder="请输入手机号"/>
                    </Form.Item>
                    <Form.Item name="code"
                               rules={[
                                   {required: true, message: '请输入验证码'},
                               ]}>
                        <Input size="large" placeholder="请输入验证码" maxLength={6} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login