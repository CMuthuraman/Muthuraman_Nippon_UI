import React from "react";
import './Form.css'
import { useForm } from "antd/es/form/Form";
import { Button, DatePicker, Form, Input } from "antd";
// import { Button, Form, Input, message } from "antd";

function FormPage() {

    const [FormInsert] = useForm()

    const InsertForm = () => {

    }

    return (
        <div className="FormMainClass">
            <Form form={FormInsert} onFinish={() => InsertForm()} layout="vertical" >
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className="FormCard">
                            <Form.Item label="Site" name={"Site"} rules={[
                                {
                                    required: true,
                                    message: 'Please input Site!',
                                }
                            ]}>
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="FormCard">
                            <Form.Item label="Date And Time" name={"DateAndTime"} rules={[
                                {
                                    required: true,
                                    message: 'Please Select Date And Time!',
                                }
                            ]}>
                                <DatePicker format={"DD/MM/YYYY"} style={{ width: '100%' }} />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="FormCard">
                            <Form.Item label="Issuer" name={"Issuer"} rules={[
                                {
                                    required: true,
                                    message: 'Please input Issuer!',
                                }
                            ]}>
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="FormCard">
                            <Form.Item label="Receiver" name={"Receiver"} rules={[
                                {
                                    required: true,
                                    message: 'Please input Receiver!',
                                }
                            ]}>
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="FormCard">
                            <Form.Item label="Nature of Work" name={"NatureofWork"} rules={[
                                {
                                    required: true,
                                    message: 'Please input Nature of Work!',
                                }
                            ]}>
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="FormCard">
                            <Form.Item label="Work Area" name={"WorkArea"} rules={[
                                {
                                    required: true,
                                    message: 'Please input Work Area!',
                                }
                            ]}>
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="FormCard">
                            <Form.Item label="Risk Associated with the Work" name={"RiskAssociatedwiththeWork"} rules={[
                                {
                                    required: true,
                                    message: 'Please input Risk Associated with the Work!',
                                }
                            ]}>
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="FormCard">
                            <Form.Item label="Recommended PPE" name={"RecommendedPPE"} rules={[
                                {
                                    required: true,
                                    message: 'Please input Recommended PPE!',
                                }
                            ]}>
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="FormCard">
                            <Form.Item label="Special Instruction" name={"SpecialInstruction"} rules={[
                                {
                                    required: true,
                                    message: 'Please input Special Instruction!',
                                }
                            ]}>
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="FormCard">
                            <Form.Item label="Possible Emergency Situation" name={"PossibleEmergencySituation"} rules={[
                                {
                                    required: true,
                                    message: 'Please input Possible Emergency Situation!',
                                }
                            ]}>
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="FormCard">
                            <Form.Item label="Other permits Applicable" name={"OtherpermitsApplicable"} rules={[
                                {
                                    required: true,
                                    message: 'Please input Other permits Applicable!',
                                }
                            ]}>
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="FormCard">
                            <Form.Item label="Permit Approved by Site FHS" name={"PermitApprovedbySiteFHS"} rules={[
                                {
                                    required: true,
                                    message: 'Please input Permit Approved by Site FHS!',
                                }
                            ]}>
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="FormCard">
                            <Form.Item label="Precaution Taken To Support Emergency Situation" name={"PrecautionTakenToSupportEmergencySituation"} rules={[
                                {
                                    required: true,
                                    message: 'Please input Precaution Taken To Support Emergency Situation!',
                                }
                            ]}>
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="FormCard">
                            <Form.Item label="Permit Verifiedand Closed" name={"PermitVerifiedandClosed"} rules={[
                                {
                                    required: true,
                                    message: 'Please input Permit Verifiedand Closed!',
                                }
                            ]}>
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <Form.Item className="FormButtonClass" >
                            <Button type="primary" danger onClick={() => FormInsert.resetFields()}>Cancel</Button>
                            <Button type="primary" htmlType="submit" style={{ marginLeft: '10px' }}>Save</Button>
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </div>
    )
}
export default FormPage;