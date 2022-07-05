import "./village.css"
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import ContributorSection from "../../components/contributors-img/contributors";

function Village () {
    return(
        <>
            <div className="center-page pd">
                <div className="village-top-section pdx pdt">
                    <Nav/>
                    <div className="location-bar">
                        <p>Home</p>
                        <img className="h" src={require("../../assets/images/Arrow.png")}/>
                        <p>Abia state</p>
                        <img className="h" src={require("../../assets/images/Arrow.png")}/>
                        <p>Eziama village</p>
                    </div>
                </div>
                <div className="pdx justify-center mg">
                    <h1>Eziama village</h1>
                    <div className="add-img">Contrubute here</div>
                </div>
                <div className="bar-wrapper pdx">
                    <h1>Contribution Progress</h1>
                    <p>10% control of Eziama village</p>
                    <div className="progress-bar-1 change-bg-color">
                        <div className="inner-bar-1 change-color">
                        </div>
                    </div>
                    <div className="bar-label">
                        <p>13%</p>
                        <p>100%</p>
                    </div>
                </div><hr className="mgt-5rem mgb-3rem"/>
                <div className="contributors pdx">
                    <h3>Top contributors</h3>
                    <p>These are the top contributors in this village</p>
                    <ContributorSection/>
                </div>
            </div>
            <Footer/>
        </>    
    )
}
export default Village;