import { Link } from "react-router-dom";
import "./card.css"

function Card (props) {
return(
    <div className="card-wrapper">
        <div className="card-wrapper-1">
            <h3>{props.state}</h3>
            <Link to="/states"><img src={require("../../assets/images/Arrow.png")}/></Link>
        </div><hr/>
        <div className="card-wrapper-2">
            <h4>progress</h4>
            <div className="progress-bar-container" style={{backgroundColor:props.backgroundcolor}}>
                <div className="progress-bar" style={{backgroundColor:props.color, width:props.width}}>
                </div>
            </div>
            <div className="label">
                <p>{props.percent}</p>
                <p>100%</p>
            </div><hr/>
            <div className="vote-control">
                <p>Vote control:</p>
                <p>20%</p>
            </div>
        </div>        
    </div>
)
}
function VillagesCard (props) {
    return(
        <div className="card-wrapper c2">
            <div className="card-wrapper-1">
                <h3>{props.village}</h3>
                <Link to="/states/villages"><img src={require("../../assets/images/Arrow.png")}/></Link>
            </div><hr/>
            <div className="card-wrapper-2">
                <h4>progress</h4>
                <div className="progress-bar-container" style={{backgroundColor:props.backgroundcolor}}>
                    <div className="progress-bar" style={{backgroundColor:props.color, width:props.width}}>
                    </div>
                </div>
                <div className="label">
                    <p>{props.percent}</p>
                    <p>100%</p>
                </div><hr/>
                <div className="top-contributors">
                    <p>Top 5 contributors</p>
                    <div className="top-5-contributors">
                        <img src={require("../../assets/images/contributor-1.png")}/>
                        <img src={require("../../assets/images/contributor-2.png")}/>
                        <img src={require("../../assets/images/contributor-3.png")}/>
                        <img src={require("../../assets/images/contributor-4.png")}/>
                        <img src={require("../../assets/images/contributor-5.png")}/>
                    </div>
                </div>
            </div>        
        </div>
)
}

function VillagesNotInControl (props) {
return(
    <div className="card-wrapper c2">
        <div className="card-wrapper-1">
            <h3>{props.village}</h3>
            <img src={require("../../assets/images/Arrow.png")}/>
        </div><hr/>
        <div className="card-wrapper-2">
            <h4>progress</h4>
            <div className="progress-bar-container" style={{backgroundColor:"#F1F1F1"}}>
            </div>
            <div className="label">
                <p>0%</p>
                <p>100%</p>
            </div><hr/>
            <div className="top-contributors">
                <p>Top 5 contributors</p>
                <button>Nill</button>
            </div>
        </div>        
    </div>
)
}

function VillagesGroupCard (props) {
    return(
    <div className="villages-page">
            <div className="states-top">
                <h2>States</h2>
                <div className="search-box">
                    <img src={require("../../assets/images/export-icon.png")} />
                    <input type="text" placeholder="Search state here"/>
                </div>
            </div>
            <div className="states-wrapper">
                <VillagesCard village="Eziama village" color="#CE9E56" width="2.125rem" backgroundcolor="#FAF1E4" percent="10%" />
                <VillagesCard village="Osusu village" color="#018226" width="8.625rem" backgroundcolor="#E7FFEC" percent="60%"/>
                <VillagesCard village="Uratta village" color="#018226" width="11.125rem" backgroundcolor="#E7FFEC" percent="10%" />
                <VillagesCard village="Ariaria village" color="#CE9E56" width="4.5rem" backgroundcolor="#FAF1E4" percent="20%" />
                <VillagesCard village="Ogbo village" color="#CE9E56" width="4.1875rem" backgroundcolor="#FAF1E4" percent="20%" />
                <VillagesCard village="Umuola-Edgelu village" color="#CE9E56" width="5.625rem" backgroundcolor="#FAF1E4" percent="20%" />
                <VillagesCard village="Umuola-Okpulor village" color="#CE9E56" width="5.125rem" backgroundcolor="#FAF1E4" percent="20%" />
                <VillagesCard village="Umuola-Okpulor village" color="#018226" width="15rem" backgroundcolor="#E7FFEC" percent="100%" />
                <VillagesCard village="Umuokpoji village" color="#018226" width="9.875rem" backgroundcolor="#E7FFEC" percent="10%"/>
                <VillagesCard village="Eziukwu village" color="#CE9E56" width="1.125rem" backgroundcolor="#FAF1E4" percent="10%" />
                <VillagesCard village="Asaokpuaja village" color="#018226" width="9.875rem" backgroundcolor="#E7FFEC" percent="10%" />
                <VillagesCard village="Abaukwu village" color="#018226" width="13.5rem" backgroundcolor="#E7FFEC" percent="10%" />
                <VillagesCard village="Asaeme village" color="#CE9E56" width="2.125rem" backgroundcolor="#FAF1E4" percent="15%" />
                <VillagesCard village="Amanfuru village" color="#018226" width="8.625rem" backgroundcolor="#E7FFEC" percent="10%" />
                <VillagesCard village="Akoli village" color="#018226" width="11.125rem" backgroundcolor="#E7FFEC" percent="10%" />
                <VillagesCard village="Ihieorji village" color="#CE9E56" width="4.5rem" backgroundcolor="#FAF1E4" percent="20%" />
                <VillagesCard village="Ndiegoro village" color="#CE9E56" width="4.1875rem" backgroundcolor="#FAF1E4" percent="20%" />
                <VillagesCard village="Nnetu village" color="#CE9E56" width="5.625rem" backgroundcolor="#FAF1E4" percent="40%"/>
                <VillagesCard village="Ohabiam village" color="#CE9E56" width="5.125rem" backgroundcolor="#FAF1E4" percent="20%" />
                <VillagesCard village="Umuagbai village" color="#018226" width="15rem" backgroundcolor="#E7FFEC" percent="100%"/>
                <VillagesCard village="Umunisi village" color="#018226" width="9.875rem" backgroundcolor="#E7FFEC" percent="10%" />
                <VillagesCard village="Umumba village" color="#CE9E56" width="1.125rem" backgroundcolor="#FAF1E4" percent="10%"/>
                <VillagesCard village="Umuogele village" color="#018226" width="9.875rem" backgroundcolor="#E7FFEC" percent="10%"/>
                <VillagesCard village="Umuosi village" color="#018226" width="13.5rem" backgroundcolor="#E7FFEC" percent="10%" />
            </div>
            <h4 className="not-in-control">Villages not in control</h4>
            <div className="villages-not-in-control">
                <VillagesNotInControl village="Eziama village"/>
                <VillagesNotInControl village="Osusu village"/>
                <VillagesNotInControl village="Uratta village"/>
                <VillagesNotInControl village="Ariaria village"/>
                <VillagesNotInControl village="Ogbo village"/>
                <VillagesNotInControl village="Umuola-Edgelu village"/>
                <VillagesNotInControl village="Umuola-Okpulor village"/>
                <VillagesNotInControl village="Umuola-Okpulor village"/>
            </div>
            <button className="add-village" href="#">Add a missing village</button>
        </div>
    )
}
function ImageCard (props) {
    return(
        <div>
        <img className="image-card" src={props.url}/>
        </div>
    )
}

function Images () {
    return(
        <div className="img-comp">
            <div className="justify-center"> 
                <div>               
                    <h2>Images</h2>
                    <p>These are social media images across your state from the <br/>supporters and contributors.</p>
                </div>
                <div className="add-img">Contrubute images</div>
            </div>
            <div className="d-flex">
                <ImageCard url={require("../../assets/images/img-1.png")}/>
                <ImageCard url={require("../../assets/images/img-2.png")}/>
                <ImageCard url={require("../../assets/images/img-3.png")}/>
                <ImageCard url={require("../../assets/images/img-4.png")}/>
                <ImageCard url={require("../../assets/images/img-5.png")}/>
                <ImageCard url={require("../../assets/images/img-6.png")}/>
                <ImageCard url={require("../../assets/images/img-7.png")}/>
                <ImageCard url={require("../../assets/images/img-8.png")}/>
                <ImageCard url={require("../../assets/images/img-9.png")}/>
                <ImageCard url={require("../../assets/images/img-10.png")}/>
                <ImageCard url={require("../../assets/images/img-11.png")}/>
                <ImageCard url={require("../../assets/images/img-12.png")}/>
                <ImageCard url={require("../../assets/images/img-13.png")}/>
                <ImageCard url={require("../../assets/images/img-14.png")}/>
                <ImageCard url={require("../../assets/images/img-15.png")}/>
                <ImageCard url={require("../../assets/images/img-16.png")}/>
            </div>
        </div>
    )
}

export default Card;
export {VillagesGroupCard ,Images};