import cl from './SignUpInfo.module.scss';
import { useState, useEffect} from "react";
import {Link, NavLink} from 'react-router-dom';
import validator from 'validator';
import InputMask from 'react-input-mask';

const SignUpInfo = () => {
    let schema = require('./../json/JSONSchema.json');
    let phoneRe=new RegExp(schema['mobilePhone']['regExp']);
    let emailRe=new RegExp(schema['email']['regExp']);

    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordError, setPasswordError]=useState(false);
    const [phoneError, setPhoneError]=useState(false);
    const [emailError, setEmailError]=useState(false);
    const [passwordDirty, setPasswordDirty]=useState(false);
    const [formValid, setFormValid]=useState(false);

    
    

    const phoneHandler=(e)=>{
        setPhone(e.target.value)
        if (!!(e.target.value)!=schema['mobilePhone']['required']) { 
            setPhoneError(true);
        }
        else if (!phoneRe.test(e.target.value.replace("(", "").replace(")", ""))) {
            setPhoneError(true);
        } else {
            setPhoneError(false);
        }
        
    }

    const emailHandler=(e)=>{
        setEmail(e.target.value)
        
        if (!!(e.target.value)!=schema['email']['required']) { 
            setEmailError(true);
        }
        else if (!emailRe.test(e.target.value)) {
            setEmailError(true);
        } else {
            setEmailError(false);
                   }
    }

    const passwordHandler=(e)=>{
        setPassword(e.target.value);
        setPasswordDirty(true);
        if (e.target.value.length<Number(schema['password']['minLength']) || e.target.value.length>Number(schema['password']['maxLength']) ) {
            setPasswordError(false)
            setFormValid(false)
        }
        else if(e.target.value=="" || password2 !== e.target.value ) {
            setPasswordError(passwordError=>true)
            setFormValid(false)
        } else {
        setPasswordError(passwordError=>false);
        setFormValid(true);
        }
    }

    const password2Handler=(e)=>{
        setPassword2(e.target.value);
        setPasswordDirty(true);
        if (e.target.value.length<Number(schema['password']['minLength']) || e.target.value.length>Number(schema['password']['maxLength']) ) {
            setFormValid(false)
        }
        else if(e.target.value=="" || password !== e.target.value ) {
            setPasswordError(passwordError=>true)
            setFormValid(false)
        } else {
        setPasswordError(passwordError=>false);
        setFormValid(true);
        }
    }

    useEffect(()=>{
        if (phoneError || emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[phoneError,emailError,passwordError])

  

    return (
       <div>
            <div className={cl.form}>
            <form id="form1">
                <InputMask mask="+375(99)9999999" className={cl.input} value={phone} onChange={e=>phoneHandler(e)} placeholder="Phone" maskplaceholder="Mobile phone" type="text" />
                <input onChange={e=>emailHandler(e)} className={cl.input} value={email} name='email' type="email" placeholder="Email"/>
                {passwordError && <div className={cl.error}>Passwords don't match</div>}
                <input onChange={e=>passwordHandler(e)} className={cl.input} value={password} name='password' type="password" placeholder="Password"/>
                {(passwordDirty&&passwordError) && <div className={cl.error}>Passwords don't match</div>}
                <input onChange={e=>password2Handler(e)} className={cl.input} value={password2} name='password' type="password" placeholder="Repeat password"/>
                <input default="disabled" form="form1" disabled ={!formValid} name="submit" className={cl.button} value="Submit" type='submit'/>
                <button disabled={!formValid} className={cl.button}><NavLink  end style={({isActive})=>({color:isActive?'#202082':'inherit'})} to="/personal">Next step</NavLink></button>
            </form>
       </div>
       </div>
    )
}

export default SignUpInfo;