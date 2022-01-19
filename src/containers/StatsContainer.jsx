import { useEffect, useState } from "react"
import { StatsBox } from "../components/StatsBox";
import { Perfil } from '../components/Perfil'
import "../styles/StatsContainer.css"

export const StatsContainer = () => {
    
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/data")
        .then(response => response.json())
        .then(response => setData(response));  
    }, []);
    
    
    return (
        <div className="statsContainer">
            <Perfil />
           {
               data.map(item => <StatsBox item={item} />)
           } 
        </div>
    )
}
