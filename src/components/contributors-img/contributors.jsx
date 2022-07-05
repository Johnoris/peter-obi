import "./contributors.css"

function Contributor (props) {
    return(
        <div className="contibutor-comp">
            <img src={props.url}/>
            <h5 className="ac">{props.name}</h5>
            <p className="ac">Votes delivered {props.votes}</p>
        </div>
    )
}

function Votes (props) {
    return(
        <div className="contibutor-comp">
            <img src={props.url}/>
            <h5 className="mgl">{props.name}</h5>
            <div className="delivered">
                <img className="tick" src={require("./../../assets/images/tick.png")}/>
                <p>Guaranteed</p>
            </div>
        </div>
    )
}
function ContributorSection () {
    return(
        <>
            <div className="d-flex gap">
                <Contributor url={require("../../assets/images/top-contributor-1.png")} name="Ejima Benson" votes="50"/>
                <Contributor url={require("../../assets/images/top-contributor-2.png")} name="Sandra Okeke" votes="50"/>
                <Contributor url={require("../../assets/images/top-contributor-3.png")} name="Egwere Mmadu" votes="50"/>
                <Contributor url={require("../../assets/images/top-contributor-4.png")} name="Chidera Mmadu" votes="50"/>
                <Contributor url={require("../../assets/images/contributor.png")} name="Queen Okpala" votes="50"/>
                <Contributor url={require("../../assets/images/top-contributor-4.png")} name="Chidera Mmadu" votes="30"/>
                <Contributor url={require("../../assets/images/contributor.png")} name="Queen Okpala" votes="50"/>
                <Contributor url={require("../../assets/images/top-contributor-2.png")} name="Sandra Okeke" votes="10"/>
                <Contributor url={require("../../assets/images/top-contributor-3.png")} name="Egwere Mmadu" votes="20"/>
                <Contributor url={require("../../assets/images/top-contributor-1.png")} name="Ejima Benson" votes="10"/>
            </div><hr/>
            <div className="contributors vote-pdt">
                <h3>Vote guaranteed</h3>
                <p>These are the votes quaranteed in this village</p>
                <div className="g-flex">
                    <Votes url={require("../../assets/images/top-contributor-1.png")} name="Ejima Benson" />
                    <Votes url={require("../../assets/images/top-contributor-2.png")} name="Sandra Okeke" />
                    <Votes url={require("../../assets/images/top-contributor-3.png")} name="Egwere Mmadu" />
                    <Votes url={require("../../assets/images/top-contributor-4.png")} name="Chidera Mmadu" />
                    <Votes url={require("../../assets/images/contributor.png")} name="Queen Okpala" />
                    <Votes url={require("../../assets/images/contributor.png")} name="Queen Okpala" />
                    <Votes url={require("../../assets/images/contributor.png")} name="Queen Okpala" />
                    <Votes url={require("../../assets/images/contributor.png")} name="Queen Okpala" />
                    <Votes url={require("../../assets/images/contributor.png")} name="Queen Okpala" />
                    <Votes url={require("../../assets/images/contributor.png")} name="Queen Okpala" />
                    <Votes url={require("../../assets/images/top-contributor-1.png")} name="Ejima Benson" />
                    <Votes url={require("../../assets/images/top-contributor-2.png")} name="Sandra Okeke" />
                    <Votes url={require("../../assets/images/top-contributor-3.png")} name="Egwere Mmadu" />
                    <Votes url={require("../../assets/images/top-contributor-4.png")} name="Chidera Mmadu" />
                    <Votes url={require("../../assets/images/contributor.png")} name="Queen Okpala" />
                    <Votes url={require("../../assets/images/contributor.png")} name="Queen Okpala" />
                    <Votes url={require("../../assets/images/contributor.png")} name="Queen Okpala" />
                    <Votes url={require("../../assets/images/contributor.png")} name="Queen Okpala" />
                    <Votes url={require("../../assets/images/contributor.png")} name="Queen Okpala" />
                    <Votes url={require("../../assets/images/contributor.png")} name="Queen Okpala" />
                    <Votes url={require("../../assets/images/top-contributor-1.png")} name="Ejima Benson" />
                    <Votes url={require("../../assets/images/top-contributor-2.png")} name="Sandra Okeke" />
                    <Votes url={require("../../assets/images/top-contributor-3.png")} name="Egwere Mmadu" />
                    <Votes url={require("../../assets/images/top-contributor-4.png")} name="Chidera Mmadu" />
                </div><hr/> 
                <h3 className="vote-pdt">Vote delivered</h3>
                <div className="vote-delivered d-flex">
                    <img src={require("../../assets/images/top-contributor-1.png")}/>
                    <div className="delivered-votes"> 
                        <h2>Ejima Benson</h2>
                        <div className="delivered">
                            <img className="tick" src={require("./../../assets/images/tick.png")}/>
                            <p>Delivered votes</p>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}
export default ContributorSection;