import cl from './SignUpInfo.module.scss';
import {Link, NavLink} from 'react-router-dom'

const SignUpInfo = () => {
    return (
       <div>
            <div className={cl.form}>
            <form>
                <input className={cl.form} name='mobilePhone' type="text" placeholder="Phone"/>
                <input className={cl.form} name='email' type="email" placeholder="Email"/>
                <input className={cl.form} name='password' type="password" placeholder="Password"/>
                <input className={cl.form} name='password' type="password" placeholder="Repeat password"/>
                <button className={cl.button} type='submit'><NavLink end style={({isActive})=>({color:isActive?'#202082':'inherit'})} to="/personal">Next step</NavLink></button>
            </form>
       </div>
       </div>
    )
}

export default SignUpInfo;