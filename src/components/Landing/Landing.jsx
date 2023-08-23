import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from 'src/firebase';
import { signInAnonymously } from 'firebase/auth';
import { StyledLanding } from './styledComponents';
import { Button, Form, Input, ColorPicker } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { setUser, setLoading } from 'store/slices';
import { IconClear } from 'assets';
import { AES } from 'crypto-js';
import { v4 as uuid } from 'uuid';

const Landing = () => {
	const dispatch = useDispatch();
	const [form] = Form.useForm();
	const [colorHex, setColorHex] = useState('#1677ff');

	const handleSubmit = async (values) => {
		if (values.username.trim() === '') {
			return;
		}

		const user = {
			username: values.username.trim(),
			colour: typeof colorHex === 'string' ? colorHex : colorHex.toHexString(),
			uid: uuid()
		};

		try {
			await signInAnonymously(auth).then(async (userCredential) => {
				console.log('Sign in successful');

				const newUser = {
					uid: userCredential.user.uid,
					username: user.username,
					colour: user.colour
				};

				await addUser(newUser);
			});
		} catch (error) {
			console.error(error);
		}
	};

	const addUser = async (user) => {
		await setDoc(doc(db, 'users', user.uid), user)
			.then(() => {
				console.log('User added successfuly');
				dispatch(setUser(user));
				form.resetFields();
			})
			.catch((error) => {
				console.error(error);
				alert('User could not be added. Contact support if this issue persists.');
				alert(error);
			});
	};

	return (
		<StyledLanding>
			<span className="logo">
				<img src={IconClear} alt="Loqui" />
			</span>
			<span className="loqui">Loqui Chat</span>
			<div className="form-container">
				<Form name="userForm" form={form} layout="vertical" onFinish={handleSubmit} autoComplete="off" requiredMark={false} className="form">
					<Form.Item
						label="Username (will be visible to other users)"
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
						<Input size="large" prefix={<UserOutlined />} placeholder="FunkyDonut26" allowClear={true} />
					</Form.Item>

					<Form.Item label="Colour (for your icon background)" name="colour">
						<ColorPicker size="large" showText format="hex" value={colorHex} onChange={setColorHex} />
					</Form.Item>

					<Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
						<Button type="primary" htmlType="submit" className="submit-button">
							Start chatting!
						</Button>
					</Form.Item>
				</Form>
			</div>
		</StyledLanding>
	);
};

export default Landing;
