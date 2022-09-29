import cl from './personalInfo.module.scss';
import {Link, NavLink} from 'react-router-dom';
import { useState, useEffect } from "react";
import Modal from '../modal/Modal';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const PersonalInfo = () => {

    

    let schema = require('./../json/JSONSchema.json')

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [formValid, setFormValid]=useState(false);
    const [nameError, setNameError]=useState(false);
    const [lastnameError, setLastnameError]=useState(false);
    const [birthdayError, setBirthdayError]=useState(false);
    const [modalActive,setModalActive]=useState(false)
    const [select,setSelect]=useState("")
    const [selectError, setSelectError]=useState(false);
    const [radio,setRadio]=useState("")
    const [check,setCheck]=useState(false)

    const nameHandler=(e)=>{
        setName(e.target.value)
        if (!!(e.target.value)!=schema['firstName']['required']) { 
            setNameError(true);
        }
        else if (e.target.value.split('').length<Number(schema['firstName']['minLength']) || e.target.value.split("").length>Number(schema['firstName']['maxLength']) ) {
            setFormValid(false)
        }
        else {
            setNameError(false);
                   }
    }

    const lastnameHandler=(e)=>{
        setLastname(e.target.value)
        if (!!(e.target.value)!=schema['lastName']['required']) { 
            setLastnameError(true);
        }
        else if (e.target.value.split('').length<Number(schema['lastName']['minLength']) || e.target.value.split("").length>Number(schema['lastName']['maxLength']) ) {
            setFormValid(false)
        }
        else {
            setLastnameError(false);
            }
    }

    const birthdayHandler=(e)=>{
        setBirthday(e.target.value)
        if (!!(e.target.value)!=schema['birthday']['required']) { 
            setBirthdayError(true);
        } else {
            setBirthdayError(false);
            setFormValid(true);
        }
    }

    const selectHandler=(e)=>{
        setSelect(e.target.value)
        if (!!(e.target.value)!=schema['ocean']['required']) { 
            setSelectError(true);
        } else {
            setSelectError(false);
        }
    }

    const radioHandler=(e)=>{
        setRadio(e.target.value)
    }

    const checkHandler=(e)=>{
        setCheck(!check)
    }

    useEffect(()=>{
        if (nameError || lastnameError || birthdayError || selectError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[nameError,lastnameError,birthdayError,selectError])


    return (
        
       <div className={cl.form}>

            <form>
                <input className={cl.input} value={name} onChange={e=>nameHandler(e)}  name='name' type="text" placeholder="First Name"/>
                <input className={cl.input} value={lastname} onChange={e=>lastnameHandler(e)}  name='lastname' type="text" placeholder="Last Name"/>


                <RadioGroup onChange={e=>radioHandler(e)} value={radio} className={cl.radiocontainer}>
                    <label className={cl.radiolabel} value="select">Your sex:</label>
                    <input  value="Male" className={cl.radio} id="male" type="radio" name="question"/>
                    <label className={cl.radiolabel} for="male">Male</label>
                    <input  value="Female" className={cl.radio} id="female" type="radio" name="question"/>
                    <label className={cl.radiolabel} for="female">Female</label>
                    <input  value="Other" className={cl.radio} id="not" type="radio" name="question"/>
                    <label className={cl.radiolabel} for="not">Other</label>
                </RadioGroup>

                <label className={cl.datelabel} for="select">Favorite ocean:</label>
                <select id="select" value={select} onChange={e=>selectHandler(e)} className={cl.select}>
                    <option value="">Select...</option>
                    <option value={schema['ocean']['oneOf'][0]}>{schema['ocean']['oneOf'][0]}</option>
                    <option value={schema['ocean']['oneOf'][1]}>{schema['ocean']['oneOf'][1]}</option>
                    <option value={schema['ocean']['oneOf'][2]}>{schema['ocean']['oneOf'][2]}</option>
                    <option value={schema['ocean']['oneOf'][3]}>{schema['ocean']['oneOf'][3]}</option>
                </select>

                <label className={cl.datelabel} for="birth">Date of birth:</label>
                <input className={cl.input} value={birthday} onChange={e=>birthdayHandler(e)}  name='birtday' id="birth" type="date"/>


                <div className={cl.checkboxes} value={check}>
                    <input className={cl.checkbox} onChange={checkHandler} type="checkbox" name="option1" value={schema['hobby']['anyOf'][0]}/><span className={cl.checkboxspan}>{schema['hobby']['anyOf'][0]}</span>
                    <input className={cl.checkbox} onChange={checkHandler} type="checkbox" name="option2" value={schema['hobby']['anyOf'][1]}/><span className={cl.checkboxspan}>{schema['hobby']['anyOf'][1]}</span>
                    <input className={cl.checkbox} onChange={checkHandler} type="checkbox" name="option3" value={schema['hobby']['anyOf'][2]}/><span className={cl.checkboxspan}>{schema['hobby']['anyOf'][2]}</span>
                    <input className={cl.checkbox} onChange={checkHandler} type="checkbox" name="option4" value={schema['hobby']['anyOf'][3]}/><span className={cl.checkboxspan}>{schema['hobby']['anyOf'][3]}</span>
                </div>
                


                <button className={cl.button} type='submit'><NavLink end style={({isActive})=>({color:isActive?'#202082':'inherit'})} to="/">Previous step</NavLink></button>
                <input onClick={()=> setModalActive(true)} disabled ={!formValid} name="submit" className={cl.button} style={{"height":"40px"}} value="Submit" />
               
                
            </form>
            <Modal active={modalActive} setActive={setModalActive} name={name} lastname={lastname} birth={birthday} select={select} radio={radio}>
                <div className={cl.modp}>Questionnaire</div>
                <div className={cl.mod}>First name: {name} </div>
                <div className={cl.mod}>Last name: {lastname}</div>
                <div className={cl.mod}>Sex: {radio} </div>
                <div className={cl.mod}>Birthday: {birthday}</div>
                <div className={cl.mod}>Favourite ocean: {select} </div>
                <div className={cl.mod}>Hobbies:{check} </div>
                

             </Modal>
       </div>
    )
}

export default PersonalInfo;