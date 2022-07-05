import "./home.css"
import Nav from "../../components/nav/nav";
import Card from "../../components/card/card";
import States from "../../components/states/state";
import SupportGroups from "../../components/groups/groups";
import Footer from "../../components/footer/footer";
import Signup from "../../components/pop-ups/signup";
import Addvillage from "../../components/pop-ups/addvillage";
import Detail from "../../components/pop-ups/details";
import Addimg from "../../components/pop-ups/add-img";
import CompleteDetails from "../../components/pop-ups/complete-details";


function Home () {
return(  
    <>
        {/*<CompleteDetails/>
        <Addimg/>
        <Detail/>
        <Addvillage/>
         <Signup/>*/}
        <div className="home-page">
            <div className="top-section">
                <Nav/>
                <div className="logo-container">
                    <div>    
                        <h3>23 votes for</h3>
                        <h1>PETER OBI</h1>
                        <p>The goal is to deliver at least<span> 23 votes per village</span> within each state and with your help and the help of your loved ones, we can do this</p>
                    </div>
                    <div>
                        <img src={require("../../assets/images/labour-party.png")}/>
                    </div>
            </div>
            <div className="bar-wrapper">
                    <h3>OUR PROGRESS SO FAR</h3>
                    <div className="progress-bar-1">
                        <div className="inner-bar-1">
                            <img src={require("../../assets/images/peter-obi.png")}/>
                        </div>
                    </div>
                    <div className="bar-label">
                        <p>13%</p>
                        <p>100%</p>
                    </div>
                </div>
            </div>
            <div className="states-container">
                <States/>
            </div>
            <SupportGroups/>
            <Footer/>
        </div>
    </>
)
}
export default Home;