import React from "react";
import "./Login.css";

const Login = ({ isDark }) => {
	return <div className={isDark ? "login loginDark" : "login"}>Login</div>;
};

export default Login;
