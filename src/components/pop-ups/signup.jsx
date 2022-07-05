import "./popup.css"

function Signup() {
    return(
        <div>
            <div className="overlay">
            </div>
            <div className="center">
                <div className="f-screen">
                    <div className="sign-up">
                        <h3>Welcome to</h3>
                        <h4>Peter Obi campaign</h4><hr/>
                        <p>Sign-up with social media</p>   
                        <div className="options">
                            <Options src={require("../../assets/images/google-icon.png")} text="Join with Google"/>
                            <Options src={require("../../assets/images/facebook-icon.png")} text="Join with Facebook"/>
                            <Options src={require("../../assets/images/twitter-icon.png")} text="Join with Twitter"/>
                            <Options src={require("../../assets/images/apple-icon.png")} text="Join with Apple"/>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
}
function Options(props) {
    return(
        <div className="sign-up-opt">
            <img src={props.src}/>
            <h5>{props.text}</h5>
        </div>
    )
}
export default Signup;