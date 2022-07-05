import "./footer.css"

function Footer () {
    return(
        <footer>
            <div>
            <img src={require("../../assets/images/nav-logo.png")}/>
            </div>
            <div className="footer-text">
                <h2>Be a part of the movement</h2>
                <p>It matters today and it will even matter more tomorrow, let’s get back our Nigeria</p>
                <button href="#">Deliver votes</button>
            </div>
        </footer>
    )
}
export default Footer;