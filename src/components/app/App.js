import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUpInfo from "../SignUpInfo/SignUpInfo";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";

const App =()=> {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <BreadCrumbs/>
                <main>
                <Routes>
                    <Route path="/" element={<SignUpInfo/>}/>
                    <Route path="/personal" element={<PersonalInfo/>}/>
                    <Route path="*" element={<SignUpInfo/>}/>
                </Routes>
                </main>
                <AppFooter/>
            </div>
        </Router>
    )
    }


export default App;