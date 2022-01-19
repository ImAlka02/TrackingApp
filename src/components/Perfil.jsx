import "../styles/Perfil.css"

export const Perfil = () => {
    return (
        <div className="containerPerfil">
            <div className="perfilInformation">
                <img src="/images/image-jeremy.png" alt="jeremy"/>
                <div>
                    <p>Report for</p>
                    <p>Jeremy Robson</p>
                </div>
            </div>
            <div className="perfilDate">
                <p>Daily</p>
                <p>Weekly</p>
                <p>Monthly</p>
            </div>
        </div>
    )
}
