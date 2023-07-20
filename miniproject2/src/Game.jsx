import { Button, Typography } from "@mui/material";
import axios from "axios";
export function Game(props) {
    let joinHandler = ()=> {
        let userName = prompt('What is your name?')
        console.log(props.id)
        axios.put(`http://localhost:3000/?userName=${userName}&id=${props.id}`)  
        .then(()=>alert('You have been added to the game!'))      
    }
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: '2%', backgroundColor: 'rgb(112,112,112)', borderRadius: 8, padding: '2%' }}>
            <Typography>Court Name: </Typography>
            <img src={props.locationImg} style={{ width: '256px', height: '256px', objectFit: 'cover' }}></img>
            <div style={{flexDirection:'column'}}>
            <div style={{flexDirection:'row'}}>
            <Typography>Hosted By:</Typography>
            <img src={props.hostImg} style={{ width: '100px', height: '100px', objectFit: 'cover' }}></img>
            <Typography>Date: {props.date}</Typography>
            <Typography>Attending: {props.players.join(",")}</Typography>
            </div>
                <Button onClick={()=>joinHandler()}>Join Game!</Button>
            </div>
        </div>
    )
}