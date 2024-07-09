import { portuguese, english } from '../../assets/texts';
import './Navbar.css'
const Navbar = ()=>{


    return(
        <div className="navbar">
            <p>info.gersontamele@gmail.com</p>
            <div className="nav-wrapper">
                <span>{portuguese.navbar[0]}</span>
                <span>{portuguese.navbar[1]}</span>
                <span>{portuguese.navbar[2]}</span>
                <span>{portuguese.navbar[3]}</span>
            </div>
        </div>
    )
}

export default Navbar;