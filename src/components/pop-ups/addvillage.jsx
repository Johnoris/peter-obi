import "./popup.css"

function Addvillage () {
    return(
        <div>
            <div className="overlay">
            </div>
            <div className="f-screen">
                <div className="add-village-popup">
                    <div className="space-between">
                        <div>
                            <h3>Add a missing</h3>
                            <h4>Village</h4>
                        </div>
                        <div>
                            <img src={require("../../assets/images/close-icon.png")}/>
                        </div>
                    </div>
                    <hr/>
                    <p>Kindly add a missing village</p>
                    <input type="text" placeholder="Enter village name"/>
                    <button type="submit">Complete</button>
                </div>
            </div>
        </div>
    )
}
export default Addvillage;