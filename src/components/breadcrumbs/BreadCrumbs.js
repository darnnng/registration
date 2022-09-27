import cl from './breadCrumbs.module.scss';
import {Link, NavLink} from 'react-router-dom'

const BreadCrumbs = () => {
    return (
        
            <nav className={cl.bread}>
                <ul>
                    <li><NavLink end style={({isActive})=>({color:isActive?'#202082':'inherit'})} to="/">SignUp Info</NavLink></li>
                    ˃
                    <li><NavLink end style={({isActive})=>({color:isActive?'#202082':'inherit'})} to="/personal">Personal Info</NavLink></li>
                </ul>
            </nav>
    )
}

export default BreadCrumbs;