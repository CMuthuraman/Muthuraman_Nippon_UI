import React, { useState } from "react";
import './Login.css'
import BackgroundVideos from '../../Assets/BackgroundVideos.mp4'
import { useForm } from "antd/es/form/Form";
import { Button, Form, Input, message } from "antd";
import NipponLogo from '../../Assets/Nippon_Taglines_N_Symbol.png'
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function Login() {
    const Navigate = useNavigate()
    const [LoginForm] = useForm()
    const [LoaderHiden, setLoaderHiden] = useState(false)

    const onLoginClick = () => {
        let Input = LoginForm.getFieldValue()
        if (Input.UserName.substring(0, 3).toUpperCase() === "NPI") {
            Input = { EmployeeId: Input.UserName.toUpperCase(), Password: Input.Password };
            setLoaderHiden(true)
            axios
                .post(
                    `https://hrdetails.nipponpaint.co.in/api/Employee/Authenticate`,
                    Input
                )
                .then(
                    (res) => {
                        setLoaderHiden(true);
                        if (res.data.Status === "No Results Found") {
                            toast.warning("Login credentials mismatch !", {
                                position: toast.POSITION.TOP_RIGHT,
                            });
                            LoginForm.setFieldsValue({
                                UserName: Input.UserName,
                                password: "",
                            });
                        } else {
                            sessionStorage.setItem("UserInfo", JSON.stringify(res.data));
                            Navigate("/Dashboard");
                        }
                    },
                    (err) => {
                        setLoaderHiden(true);
                        toast.info({
                            message: `Login credentials mismatch`,
                            top: 50,
                        });
                    }
                );
        } else {
            alert("Others");
        }
    }

    return (
        <div className="LoginMainClass">
            <div className="LoginPage">
                <h2 style={{ marginBottom: '40px' }}>
                    <img src={NipponLogo} style={{ width: '150px' }} />
                </h2>
                <div>
                    <Form form={LoginForm} onFinish={() => onLoginClick()}>
                        <Form.Item name={"UserName"} rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            }
                        ]}>
                            <Input placeholder="User Name" size="large" />
                        </Form.Item>
                        <Form.Item name={"Password"} rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            }
                        ]}>
                            <Input placeholder="Password" type="password" size="large" />
                        </Form.Item>
                        <Form.Item className="LoginButton_Align">
                            <Button size="large" htmlType="submit" type="primary">Login</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className="video">
                <video loop autoPlay>
                    <source src={BackgroundVideos} type='video/mp4' />
                </video>
            </div>
        </div>
    )
}
export default Login;