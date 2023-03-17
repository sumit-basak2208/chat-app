import "./Registration.css";
import { useState } from "react";
import {useNavigate, createSearchParams} from "react-router-dom";


const Registration = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

    const navigate = useNavigate();
    const loginPage = (event) => {
        navigate("/login", {
        state: {
            email: email
            }
        })
    };
    
    const submitHandler = () => {
        
        
    } 

    return (
        <div className="main-welayouts wrapper">
            
                    <h1>Creative SignUp Form</h1>
                    <div className="main-agileinfo">
                        <div className="agileits-top">
                            <form action="#" method="post" onSubmit={event => loginPage(event)} className="registration-form">
                                <input className="text" type="text" name="Username" placeholder="Username" onChange={event => setName(event.target.value)}/>
                                <input className="text email" type="email" name="email" placeholder="Email" required onChange={event => setEmail(event.target.value)}/>
                                <input className="text" type="password" name="password" placeholder="Password" onChange={event => setPassword(event.target.value)} />
                                <input className="text welpass" type="password" name="password" placeholder="Confirm Password" onChange={event => {setConPassword(event.target.value)}} />
                                <div className="wthree-text">
						            <label className="anim">
							            <input type="checkbox" className="checkbox"/>
							            <span>I Agree To The Terms & Conditions</span>
						            </label>
						            <div className="clear"> </div>
					            </div>
                                <input type="submit" value="SIGN UP" onClick={event => submitHandler()}/>
                            </form>
                            <p>Already have an Account? <a onClick={loginPage}> Login Now!</a></p>
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

export default Registration;