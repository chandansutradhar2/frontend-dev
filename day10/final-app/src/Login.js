import { connect } from "react-redux";

import ACTIONS from "./state-redux/action";
import { useSelector, useDispatch } from "react-redux";

export const Login = () => {
	const dispatch = useDispatch();
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
							onClick={() => dispatch(ACTIONS.loginUser(true))}
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default connect()(Login);
