import "./Login.css";
import { useState, useEffect } from "react";
import {useNavigate, useLocation} from "react-router-dom";

const Login = () => {
    
    const [email, setEmail] = useState("");

    const location = useLocation();

    useEffect(() => {
        if(location.state !== null) 
            setEmail(location.state.email);
    }, [location]);

    const navigate = useNavigate();
    const registrationPage = () => {navigate("/signup")};
    const appPage = () => {navigate("/app")};

    return (
        <div className="main-welayouts wrapper">
                    <h1>Creative LogIn Form</h1>
                    <div className="space"></div>
                    <div className="main-agileinfo">
                        <div className="agileits-top">
                            <form action="#" method="post" onSubmit={appPage} className="login-form">
                                <input className="text email" type="email" name="email" placeholder="Email" value={email} onChange={event => setEmail(email)} required/>
                                <input className="text" type="password" name="password" placeholder="Password" required/>
                                <input type="submit" value="SIGN IN"/>
                            </form>
                            <p>Don't have an Account? <a onClick={registrationPage}> SignUp Now!</a></p>
                        </div>
                    </div>
		<ul className="colorlib-bubbles">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
    )
}

export default Login;