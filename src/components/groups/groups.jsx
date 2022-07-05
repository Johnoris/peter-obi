import "./groups.css"

function Group () {
    return(
        <div className="group-wrapper">
            <h4>Group name</h4>
            <h3>Lagos group</h3>
            <p>Number of votes brought in</p>
            <div className="no-of-votes">
                <h6>25</h6>
            </div>
        </div>
    )
}
function SupportGroups () {
    return(
        <div className="support-wrapper">
            <h2>Support groups</h2>    
            <div className="support-groups">
                <Group/>
                <Group/>
                <Group/>
                <Group/>
                <Group/>
                <Group/>
                <Group/>
                <Group/>
                <Group/>
                <Group/>
                <Group/>
                <Group/>
            </div>
            <button href="#">Add a group</button>
        </div>    
    )
}
export default SupportGroups;