import "./popup.css"

function Addimg () {
    return(
        <div>
            <div className="overlay">
            </div>
            <div className="f-screen">
                <div className="contribute-img">
                    <div className="space-between">
                        <div>
                            <h3>Contribute</h3>
                            <h4>Your image</h4>
                        </div>
                        <div>
                            <img src={require("../../assets/images/close-icon.png")}/>
                        </div>
                    </div><hr/>
                    <p>You can add new images from activities around your states and village. File should be in .pdf, .jpeg, .jpg, .png formats with less than 10 MB size</p>
                    <div className="add-file">
                        <img src={require("../../assets/images/add-img.png")}/>
                        <h5>Add a new image</h5>
                    </div>
                    <p>You can upload upto 3 pdf or 10 image files</p>
                    <button type="submit">Complete</button>
                </div>
            </div>
        </div>
    )
}
export default Addimg;