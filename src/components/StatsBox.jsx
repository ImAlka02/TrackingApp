import "../styles/StatBox.css"
export const StatsBox = (props) => {
    console.log(props)
    return (
        <div className="statBoxContainer">
            <div className="statBoxContainer__header" style={{ backgroundColor: props.item.color}}>
                <img src={props.item.image} alt="image-work" />
            </div>
            <div className="statBoxContainer__information">
                <div className="statBoxContainer__information-itemTitle">
                    <p>{props.item.title}</p>
                    <img src="/images/icon-ellipsis.svg" alt="image-elipse" />
                </div>
                <div className="statBoxContainer__information-itemTime">
                    <p>{props.item.timeframes.weekly.current}hrs</p>
                    <p>Last Week - {props.item.timeframes.weekly.previous}hrs</p>
                </div>
            </div>
        </div>
    )
}
