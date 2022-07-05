import "./popup.css"

function CompleteDetails () {
    return(
        <div>
            <div className="overlay">
            </div>
            <div className="f-screen">
                <div className="complete-details">
                    <div className="space-between">
                        <div>
                            <h3>Help us complete</h3>
                            <h4>This Details</h4>
                        </div>
                        <div>
                            <img src={require("../../assets/images/close-icon.png")}/>
                        </div>
                    </div>
                    <hr/>
                    <p>Do you have a <span>PVC</span></p>
                    <div className="box-container">
                        <div className="radio-btn">
                            <h2>YES</h2>
                            <input type="radio"></input>
                        </div>
                        <div className="radio-btn">
                            <h2>NO</h2>
                            <input type="radio"></input>
                        </div>
                    </div>
                    <p>Will you be <span>VOTING</span></p>
                    <div className="box-container">
                        <div className="radio-btn">
                            <h2>YES</h2>
                            <input type="radio"></input>
                        </div>
                        <div className="radio-btn">
                            <h2>NO</h2>
                            <input type="radio"></input>
                        </div>
                    </div>
                    <button type="submit">Next</button>
                </div>
            </div>
        </div>
    )
}
export default CompleteDetails;