export const Login = (props) => {
	return (
		<>
			<div className="container">
				<form className="form-group">
					<div className="mb-3">
						<label className="form-label">Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter Email"
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Enter Password"
						/>
					</div>

					<div className="mb-3">
						<button
							type="button"
							className="btn btn-primary"
							onClick={props.doLogin}
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</>
	);
};
