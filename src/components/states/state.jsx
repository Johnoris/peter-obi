import Card from "../card/card";
import "./state.css"

function States() {
return(
    <main>
        <div className="states-top">
            <h2>States</h2>
            <div className="search-box">
                <img src={require("../../assets/images/export-icon.png")} />
                <input type="text" placeholder="Search state here"/>
            </div>
        </div>
        <div className="states-wrapper">
            <Card state="Abia state" color="#CE9E56" width="2.125rem" backgroundcolor="#FAF1E4" percent="10%" />
            <Card state="Adamawa state" color="#018226" width="8.625rem" backgroundcolor="#E7FFEC" percent="60%"/>
            <Card state="Akwa Ibom state" color="#018226" width="11.125rem" backgroundcolor="#E7FFEC" percent="10%" />
            <Card state="Anambra state" color="#CE9E56" width="4.5rem" backgroundcolor="#FAF1E4" percent="20%" />
            <Card state="Bauchi state" color="#CE9E56" width="4.1875rem" backgroundcolor="#FAF1E4" percent="20%" />
            <Card state="Bayelsa state" color="#CE9E56" width="5.625rem" backgroundcolor="#FAF1E4" percent="20%" />
            <Card state="Benue state" color="#CE9E56" width="5.125rem" backgroundcolor="#FAF1E4" percent="20%" />
            <Card state="Borno state" color="#018226" width="15rem" backgroundcolor="#E7FFEC" percent="100%" />
            <Card state="Cross River state" color="#018226" width="9.875rem" backgroundcolor="#E7FFEC" percent="10%"/>
            <Card state="Delta state" color="#CE9E56" width="1.125rem" backgroundcolor="#FAF1E4" percent="10%" />
            <Card state="Ebonyi state" color="#018226" width="9.875rem" backgroundcolor="#E7FFEC" percent="10%" />
            <Card state="Edo state" color="#018226" width="13.5rem" backgroundcolor="#E7FFEC" percent="10%" />
            <Card state="Ekiti state" color="#CE9E56" width="2.125rem" backgroundcolor="#FAF1E4" percent="15%" />
            <Card state="Enugu state" color="#018226" width="8.625rem" backgroundcolor="#E7FFEC" percent="10%" />
            <Card state="Gombe state" color="#018226" width="11.125rem" backgroundcolor="#E7FFEC" percent="10%" />
            <Card state="Imo state" color="#CE9E56" width="4.5rem" backgroundcolor="#FAF1E4" percent="20%" />
            <Card state="Jigawa state" color="#CE9E56" width="4.1875rem" backgroundcolor="#FAF1E4" percent="20%" />
            <Card state="Kaduna state" color="#CE9E56" width="5.625rem" backgroundcolor="#FAF1E4" percent="40%"/>
            <Card state="Kano state" color="#CE9E56" width="5.125rem" backgroundcolor="#FAF1E4" percent="20%" />
            <Card state="Katsina state" color="#018226" width="15rem" backgroundcolor="#E7FFEC" percent="100%"/>
            <Card state="Kebbi state" color="#018226" width="9.875rem" backgroundcolor="#E7FFEC" percent="10%" />
            <Card state="Kogi state" color="#CE9E56" width="1.125rem" backgroundcolor="#FAF1E4" percent="10%"/>
            <Card state="Kwara state" color="#018226" width="9.875rem" backgroundcolor="#E7FFEC" percent="10%"/>
            <Card state="Lagos state" color="#018226" width="13.5rem" backgroundcolor="#E7FFEC" percent="10%" />
            <Card state="Nasarawa state" color="#CE9E56" width="4.1875rem" backgroundcolor="#FAF1E4" percent="250%"/>
            <Card state="Niger state" color="#CE9E56" width="5.625rem" backgroundcolor="#FAF1E4" percent="30%"/>
            <Card state="Ogun state" color="#CE9E56" width="5.125rem" backgroundcolor="#FAF1E4" percent="30%"/>
            <Card state="Ondo state" color="#018226" width="15rem" backgroundcolor="#E7FFEC" percent="100%"/>
            <Card state="Osun state" color="#018226" width="9.875rem" backgroundcolor="#E7FFEC" percent="10%"/>
            <Card state="Oyo state" color="#CE9E56" width="1.125rem" backgroundcolor="#FAF1E4" percent="10%"/>
            <Card state="Plateau state" color="#018226" width="15rem" backgroundcolor="#E7FFEC" percent="10%" />
            <Card state="Rivers state" color="#018226" width="13.5rem" backgroundcolor="#E7FFEC" percent="10%"/>
            <Card state="Sokoto state" color="#CE9E56" width="4.1875rem" backgroundcolor="#FAF1E4" percent="25%" />
            <Card state="Taraba state" color="#CE9E56" width="5.625rem" backgroundcolor="#FAF1E4" percent="40%" />
            <Card state="Yobe state" color="#CE9E56" width="5.125rem" backgroundcolor="#FAF1E4" percent="30%" />
            <Card state="Zamfara state" color="#018226" width="15rem" backgroundcolor="#E7FFEC" percent="100%" />
            <Card state="FCT Abuja" color="#018226" width="9.875rem" backgroundcolor="#E7FFEC" percent="10%" />
        </div>
    </main>
)
}
export default States