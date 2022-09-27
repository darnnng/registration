import cl from './personalInfo.module.scss';
import {Link, NavLink} from 'react-router-dom'

const PersonalInfo = () => {
    return (
       <div className={cl.form}>
            <form>
                <input className={cl.input}  name='name' type="text" placeholder="First Name"/>
                <input className={cl.input} name='lastname' type="text" placeholder="Last Name"/>


                <div className={cl.radiocontainer}>
                    <input className={cl.radio} id="male" type="radio" name="question"/>
                    <label className={cl.radiolabel} for="male">Male</label>
                    <input className={cl.radio} id="female" type="radio" name="question"/>
                    <label className={cl.radiolabel} for="female">Female</label>
                    <input className={cl.radio} id="not" type="radio" name="question"/>
                    <label className={cl.radiolabel} for="not">Not detected</label>
                </div>

                <select className={cl.select}>
                    <option value="">Select...</option>
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                </select>

                <label className={cl.datelabel} for="birth">Date of birth:</label>
                <input className={cl.input} name='birtday' id="birth" type="date"/>
                


                <button className={cl.button} type='submit'><NavLink end style={({isActive})=>({color:isActive?'#202082':'inherit'})} to="/">Previous step</NavLink></button>
                <button className={cl.button} type='submit'>Submit</button>
            </form>
       </div>
    )
}

export default PersonalInfo;