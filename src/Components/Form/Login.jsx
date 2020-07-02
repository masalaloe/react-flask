import React, { Component } from 'react';

import '../Form/Login.css';
import { Label, Input, Form, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Axios from 'axios';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modal: false,
			username: '',
			password: '',
			response: ''
		};
	}

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	registerNew = () => {
		Axios.post('http://localhost:5005/api/register', {
			username: this.state.username,
			password: this.state.password
		}).then((json) => {
			if (json.data.status === 'SUCCESS') {
				this.setState({
					response: json.data.values
				});
			} else {
				this.setState({
					response: json.data.values
				});
            }
            console.table(json.data);
		});
    };
    
    loginUser = () => {
		Axios.post('http://localhost:5005/api/login', {
			username: this.state.username,
			password: this.state.password
		}).then((json) => {
			if (json.data.status === 'SUCCESS') {
				this.setState({
					response: json.data.values
				});
			} else {
				this.setState({
					response: json.data.values
				});
            }
            console.table(json.data);
		});
	};

	render() {
		return (
			<body className="text-center">
				<Form className="form-signin">
					<h1 class="h3 mb-3 font-weight-normal">Voting Online</h1>
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
					<div class="checkbox mb-3">
						<Label>
							<Input type="checkbox" value="remember-me" />Remember me
						</Label>
					</div>
					<Button className="btn btn-lg btn-primary btn-block" onClick={this.loginUser}>Sign in</Button>
					<Label>
						dont have account ?{' '}
						<span
							style={{
								color: 'blue',
								textDecoration: 'underline',
								cursor: 'pointer'
							}}
							onClick={this.toggle}
						>
							Register now
						</span>
					</Label>
				</Form>
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Register</ModalHeader>
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
						<Button color="primary" onClick={this.registerNew}>Sign Up</Button>
					</ModalFooter>
				</Modal>
			</body>
		);
	}
}

export default Login;
