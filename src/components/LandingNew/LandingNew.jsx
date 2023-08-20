import React, { useState, useMemo } from 'react';
import { StyledLandingNew } from './styledComponents';
import { Button, Form, Input, Radio, ColorPicker, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { IconClear } from 'assets';

const LandingNew = () => {
	const form = Form.useForm();
	const [colorHex, setColorHex] = useState('#1677ff');

	const validate = (values) => {
		let errors = {};
		if (!values.username) {
			errors.username = 'Username is required';
		} else if (values.username.length < 3) {
			errors.username = 'Username must be at least 3 characters long';
		} else if (values.username.length > 20) {
			errors.username = 'Username must be less than 20 characters long';
		} else if (values.username === 'jakethedog23') {
			errors.username = 'Username already in use :(';
		}
		return errors;
	};

	const handleSubmit = async (values) => {
		const user = {
			username: values.username,
			colour: typeof colorHex === 'string' ? colorHex : colorHex.toHexString()
		};
		console.log(user);
	};

	return (
		<StyledLandingNew>
			<span className="logo">
				<img src={IconClear} alt="Loqui" />
			</span>
			<span className="loqui">Loqui</span>
			<div className="form-container">
				<Form
					name="userForm"
					layout="vertical"
					labelCol={{
						span: 8
					}}
					wrapperCol={{
						span: 30
					}}
					onFinish={handleSubmit}
					autoComplete="off"
					requiredMark={false}
					className="form"
				>
					<Form.Item
						label="Username"
						name="username"
						type="text"
						rules={[
							{
								required: true,
								message: 'Username is required'
							},
							{
								min: 3,
								message: 'Username must be at least 3 characters long'
							},
							{
								max: 20,
								message: 'Username must be less than 20 characters long'
							}
						]}
						colon={false}
					>
						<Input size="large" prefix={<UserOutlined />} />
					</Form.Item>

					<Form.Item label="Colour" name="colour">
						<ColorPicker size="large" showText format="hex" value={colorHex} onChange={setColorHex} />
					</Form.Item>

					<Form.Item
						wrapperCol={{
							offset: 9,
							span: 16
						}}
					>
						<Button type="primary" htmlType="submit" className="submit-button">
							Start chatting!
						</Button>
					</Form.Item>
				</Form>
			</div>
		</StyledLandingNew>
	);
};

export default LandingNew;
