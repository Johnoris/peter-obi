import "./popup.css"


function Inputcomp (props){
    return(
        <input className="details-input" type={props.type} placeholder={props.placeholder} />
    )
}
function Selectcomp (props){
    return(
        <select className="details-input" placeholder={props.placeholder}>
            <option>{props.option1}</option>
            <option>{props.option2}</option>
            <option>{props.option3}</option>
            <option>{props.option4}</option>
        </select>
    )
}
function Detail() {
    return(
        <div>
            <div className="overlay">
            </div>
            <div className="f-screen">
                <div className="details">
                    <div className="space-between">
                        <div>
                            <h3>Enter your</h3>
                            <h4>Details</h4>
                        </div>
                        <div>
                            <img src={require("../../assets/images/close-icon.png")}/>
                        </div>
                    </div>
                    <hr/>
                    <p>Kindly fill out your personal details</p>
                    <Inputcomp type="text" placeholder="First name"/>
                    <Inputcomp type="text" placeholder="Last name"/>
                    <Inputcomp type="email" placeholder="Email address"/>
                    <Selectcomp placeholder="Select your state" option2="Ogun state" option1="Select your state" option3="ondo state" option4="Osun state"/>
                    <Selectcomp placeholder="Select your state" option2="Ogun state" option1="Select your village" option3="ondo state" option4="Osun state"/>
                    <button type="submit">Continue</button>
                </div>
            </div>
        </div>
    )
}
export default Detail;