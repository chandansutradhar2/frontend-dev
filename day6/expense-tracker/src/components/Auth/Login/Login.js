import "./Login.css";

export const Login = () => {
	return (
		<div className="login">
			<div className="wrapper fadeInDown">
				<div id="formContent">
					<h2 className="active"> Sign In </h2>
					<h2 className="inactive underlineHover">Sign Up </h2>

					<div className="fadeIn first">
						{/* <img
							src="http://danielzawadzki.com/codepen/01/icon.svg"
							id="icon"
							alt="User Icon"
						/> */}
					</div>

					<form>
						<input
							type="text"
							id="login"
							className="fadeIn second"
							name="login"
							placeholder="login"
						/>
						<input
							type="text"
							id="password"
							className="fadeIn third"
							name="login"
							placeholder="password"
						/>
						<input type="submit" className="fadeIn fourth" value="Log In" />
					</form>

					<div id="formFooter">
						<a className="underlineHover" href="#">
							Forgot Password?
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
