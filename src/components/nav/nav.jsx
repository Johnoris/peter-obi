import "./nav.css"
import Signup from "../pop-ups/signup";

function Nav () {
return(
    <nav>
        <div>
            <img src={require("../../assets/images/nav-logo.png")}/>
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>How it works</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div>
            <button onClick={Signup}>Deliver votes</button>
        </div>
    </nav>
)
}
export default Nav;