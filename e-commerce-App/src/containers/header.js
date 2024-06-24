import React from "react";
import SignIn from "./signIn";
import SignUp from "./signUp";

import { Link } from "react-router-dom";
const Header = ()=>{
    return (
        <div className="ui fixed value">
        <div className="ui container center"></div>
        <h2>FakeShop</h2>
        <Link to = {'/signUp'} >Sign Up</Link>
        <div>OR LOGIN</div>
        <Link to = {'/signIn'} >Sign In</Link>
        </div>
    )
}
export default Header