import React, { Component, useState, useEffect } from 'react';
import { Label, Input, Form, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Axios from 'axios';

import '../../Static/css/Login.css';
import { conf } from '../../Config.js'

function Login() {
	const [dataLogin, setDataLogin] = useState({ username: '', password: '', response: {} ,ready: true})

	const handleInputOnChange = e => {
		const { name, value } = e.target;
		setDataLogin({ ...dataLogin, [name]: value })
	}

	const tes = (e) => {
		setDataLogin({...dataLogin, response: {status: true}});
	}

	useEffect(() => {
		setDataLogin({ ...dataLogin, ready: true})
		console.table(dataLogin)
		return () => {
			setDataLogin({ ...dataLogin, ready: false})
		}
	},[dataLogin.ready])

	const handleSubmit = (e) => {
		e.preventDefault();
		Axios.post(`${conf.API_URL}api/login`, {
			username: dataLogin.username,
			password: dataLogin.password
		}).then((json) => {
			tes(json);
			if (json.data.status === 'SUCCESS') {
				alert('Succes')
			} else {
				alert('Failed')
			}
			console.log(dataLogin);
		}).catch(ex => {
			alert(ex);
		});
	}

	function toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	function registerNew() {
		Axios.post(`${conf.API_URL}api/register`, {
			username: this.state.username,
			password: this.state.password
		}).then((json) => {
			if (json.data.status === 'SUCCESS') {
				this.setState({
					response: json.data
				});
				alert(this.state.response.status);
			} else {
				this.setState({
					response: json.data
				});
				alert(this.state.response.data);
			}
			console.table(json.data);
		});
	}

	function loginUser() {
		console.log(dataLogin)

	}

	return (
		<div className="text-center">
			<Form className="form-signin">
				<h1 className="h3 mb-3 font-weight-normal">Voting Online</h1>
				<Input
					type="text"
					name="username"
					id="username"
					value={dataLogin.username}
					onChange={handleInputOnChange}
					placeholder="Username"
				/>
				<Input
					type="password"
					name="password"
					id="password"
					value={dataLogin.password}
					onChange={handleInputOnChange}
					placeholder="Password"
				/>
				<div className="checkbox mb-3">
					<Label>
						<Input type="checkbox" value="remember-me" />Remember me
						</Label>
				</div>
				<Button className="btn btn-lg btn-primary btn-block" disabled={!dataLogin.ready} onClick={handleSubmit}>Sign in</Button>
				<Label>
					dont have account ?{' '}
					<span
						style={{
							color: 'blue',
							textDecoration: 'underline',
							cursor: 'pointer'
						}}
						onClick={toggle}
					>
						Register now
						</span>
				</Label>
			</Form>
			{/* <Modal isOpen={this.state.modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Register</ModalHeader>
				<ModalBody>
					<Form className="form-signin">
						<Input
							type="text"
							name="username"
							id="username"
							value={this.state.username}
							onChange={this.handleChange}
							placeholder="Username"
						/>
						<Input
							type="text"
							name="password"
							id="password"
							value={this.state.password}
							onChange={this.handleChange}
							placeholder="Password"
						/>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={registerNew}>Sign Up</Button>
				</ModalFooter>
			</Modal> */}
		</div>
	)
}

export default Login

// class Login extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			modal: false,
// 			username: '',
// 			password: '',
// 			response: {}
// 		};
// 	}

// 	toggle = () => {
// 		this.setState({
// 			modal: !this.state.modal
// 		});
// 	};

// 	handleChange = (e) => {
// 		this.setState({ [e.target.name]: e.target.value });
// 	};

// 	registerNew = () => {
// 		Axios.post(`${conf.API_URL}api/register`, {
// 			username: this.state.username,
// 			password: this.state.password
// 		}).then((json) => {
// 			if (json.data.status === 'SUCCESS') {
// 				this.setState({
// 					response: json.data
// 				});
// 				alert(this.state.response.status);
// 			} else {
// 				this.setState({
// 					response: json.data
// 				});
// 				alert(this.state.response.data);
// 			}
// 			console.table(json.data);
// 		});
// 	};

// 	loginUser = () => {
// 		Axios.post(`${conf.API_URL}api/login`, {
// 			username: this.state.username,
// 			password: this.state.password
// 		}).then((json) => {
// 			if (json.data.status === 'SUCCESS') {
// 				this.setState({
// 					response: json.data
// 				});
// 				alert('Success.');
// 			} else {
// 				this.setState({
// 					response: json.data
// 				});
// 				alert(this.state.response.data);
// 			}
// 			// console.table(json.data);

// 		}).catch(ex => {
// 			alert(ex);
// 		});
// 	};

// 	render() {
// 		return (
// 			<div className="text-center">
// 				<Form className="form-signin">
// 					<h1 className="h3 mb-3 font-weight-normal">Voting Online</h1>
// 					<Input
// 						type="text"
// 						name="username"
// 						id="username"
// 						value={this.state.username}
// 						onChange={this.handleChange}
// 						placeholder="Username"
// 					/>
// 					<Input
// 						type="text"
// 						name="password"
// 						id="password"
// 						value={this.state.password}
// 						onChange={this.handleChange}
// 						placeholder="Password"
// 					/>
// 					<div className="checkbox mb-3">
// 						<Label>
// 							<Input type="checkbox" value="remember-me" />Remember me
// 						</Label>
// 					</div>
// 					<Button className="btn btn-lg btn-primary btn-block" onClick={this.loginUser}>Sign in</Button>
// 					<Label>
// 						dont have account ?{' '}
// 						<span
// 							style={{
// 								color: 'blue',
// 								textDecoration: 'underline',
// 								cursor: 'pointer'
// 							}}
// 							onClick={this.toggle}
// 						>
// 							Register now
// 						</span>
// 					</Label>
// 				</Form>
// 				<Modal isOpen={this.state.modal} toggle={this.toggle}>
// 					<ModalHeader toggle={this.toggle}>Register</ModalHeader>
// 					<ModalBody>
// 						<Form className="form-signin">
// 							<Input
// 								type="text"
// 								name="username"
// 								id="username"
// 								value={this.state.username}
// 								onChange={this.handleChange}
// 								placeholder="Username"
// 							/>
// 							<Input
// 								type="text"
// 								name="password"
// 								id="password"
// 								value={this.state.password}
// 								onChange={this.handleChange}
// 								placeholder="Password"
// 							/>
// 						</Form>
// 					</ModalBody>
// 					<ModalFooter>
// 						<Button color="primary" onClick={this.registerNew}>Sign Up</Button>
// 					</ModalFooter>
// 				</Modal>
// 			</div>
// 		);
// 	}
// }

// export default Login;
