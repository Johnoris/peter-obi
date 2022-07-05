import { Images, VillagesGroupCard } from "../../components/card/card";
import Nav from "../../components/nav/nav";
import "./state.css";
import Footer from "../../components/footer/footer"

function State () {
    return(
        <>
            <div className="village">
                <Nav/>
                <div className="village-top-section">
                    <div className="location-bar">
                        <p>Home</p>
                        <img src={require("../../assets/images/Arrow.png")}/>
                        <p>Abia state</p>
                    </div>
                    <div className="village-bar-container">
                        <h1>Abbia State villages</h1>
                        <div className="village-bar-child">
                            <div>
                                <h4>Villages in control</h4>
                                <p>10% control</p>
                            </div>
                            <div className="village-bar-wrapper">
                                <div className="village-bar"><p>10%</p></div>
                                <p>100%</p>
                            </div>
                        </div>
                    </div><hr/>
                    <div className="current-gov">
                        <div className="current-gov-child">
                            <h4>Current governor</h4>
                            <div className="img-container">
                                <div>
                                    <img src={require("../../assets/images/current-gov.png")}/>
                                </div>
                                <div>
                                    <h2>Okezie Ikpeazu</h2>
                                    <h6>Since: May 29, 2015</h6>
                                    <p>Terms: 2 (Two)</p>
                                </div>
                            </div>
                        </div>
                        <div className="pdp-logo-wrapper">
                            <h4>Last vote direction</h4>
                            <div className="pdp-logo-container">                        
                                <div>
                                    <img src={require("../../assets/images/pdp-logo.png")}/>
                                </div>
                                <div>
                                    <h2>PDP</h2>
                                    <p>People Democratic Party</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>    
                </div>
                <VillagesGroupCard/>
            </div>
        <Images/>
        <Footer/>
        </>
    )
}
export default State;