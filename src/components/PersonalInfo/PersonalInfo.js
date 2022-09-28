import cl from './personalInfo.module.scss';
import {Link, NavLink} from 'react-router-dom';
import { useState } from "react";

const PersonalInfo = () => {

    let schema = require('./../json/JSONSchema.json')

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [birthday, setBirthday] = useState('');

    const nameHandler=(e)=>{
        setName(e.target.value)
    }

    const lastnameHandler=(e)=>{
        setLastname(e.target.value)
    }

    const birthdayHandler=(e)=>{
        setBirthday(e.target.value)
    }




    return (
       <div className={cl.form}>

            <form>
                <input className={cl.input} value={name} onChange={e=>nameHandler(e)}  name='name' type="text" placeholder="First Name"/>
                <input className={cl.input} value={lastname} onChange={e=>lastnameHandler(e)}  name='lastname' type="text" placeholder="Last Name"/>


                <div className={cl.radiocontainer}>
                    <input className={cl.radio} id="male" type="radio" name="question"/>
                    <label className={cl.radiolabel} for="male">Male</label>
                    <input className={cl.radio} id="female" type="radio" name="question"/>
                    <label className={cl.radiolabel} for="female">Female</label>
                    <input className={cl.radio} id="not" type="radio" name="question"/>
                    <label className={cl.radiolabel} for="not">Other</label>
                </div>

                <label className={cl.datelabel} for="select">Favorite ocean:</label>
                <select id="select" className={cl.select}>
                    <option value="">Select...</option>
                    <option value="A">{schema['ocean']['oneOf'][0]}</option>
                    <option value="B">{schema['ocean']['oneOf'][1]}</option>
                    <option value="C">{schema['ocean']['oneOf'][2]}</option>
                    <option value="D">{schema['ocean']['oneOf'][3]}</option>
                </select>

                <label className={cl.datelabel} for="birth">Date of birth:</label>
                <input className={cl.input} value={birthday} onChange={e=>birthdayHandler(e)}  name='birtday' id="birth" type="date"/>


                <div className={cl.checkboxes}>
                    <input className={cl.checkbox} type="checkbox" name="option1" value="a1" checked/><span className={cl.checkboxspan}>{schema['hobby']['anyOf'][0]}</span>
                    <input className={cl.checkbox} type="checkbox" name="option2" value="a2"/><span className={cl.checkboxspan}>{schema['hobby']['anyOf'][1]}</span>
                    <input className={cl.checkbox} type="checkbox" name="option3" value="a3"/><span className={cl.checkboxspan}>{schema['hobby']['anyOf'][2]}</span>
                    <input className={cl.checkbox} type="checkbox" name="option4" value="a4"/><span className={cl.checkboxspan}>{schema['hobby']['anyOf'][3]}</span>
                </div>
                


                <button className={cl.button} type='submit'><NavLink end style={({isActive})=>({color:isActive?'#202082':'inherit'})} to="/">Previous step</NavLink></button>
                <button className={cl.button} type='submit'>Submit</button>
            </form>
       </div>
    )
}

export default PersonalInfo;