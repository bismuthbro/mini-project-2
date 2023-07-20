import { Select,InputLabel,MenuItem,FormControl,Button} from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AddGame from "./AddGame"
export default function CourtSearch() {
    let [location, setLocation] = useState('')
    const navigate = useNavigate()
    function handleChange(event){
        setLocation(event.target.value)
        navigate('/Games/'+ event.target.value)
    }
    return (
        <>
        <div style={{display:'flex', flexDirection:'column',alignItems:'center',gap:'5vh', height:'40%', width: '25%',backgroundColor: 'rgb(112,112,112)', borderRadius: 8}}>
        <h3>Search for a Game:</h3>
        <FormControl sx={{width:'10vw', alignSelf:'center'}}>
            <InputLabel id="AreaSelector">Area</InputLabel>
                <Select
                    labelId="AreaSelectLabel"
                    id="AreaSelect"
                    value={location}
                    label="Area"
                    onChange={handleChange}
                    >
                <MenuItem value={'Dominion Road'}>Dominion Road</MenuItem>
                <MenuItem value={'Victoria Park'}>Victoria Park</MenuItem>
                <MenuItem value={'The Cloud'}>The Cloud</MenuItem>
            </Select>
        </FormControl>
        <Link to='/Add'>
        <Button>Add Game</Button>
        </Link>
        </div>
        </>
    )
}