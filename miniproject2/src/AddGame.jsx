import axios from "axios";
import { useState } from "react";
import { useTextInput } from "./useTextInput";
import moment from "moment";
import Calendar from "./Calendar";
import { InputLabel } from "@mui/material";
import {Button} from "@mui/material";
export default function AddGame() {
    let [value, setValue] = useState(moment())
    let {inputProps:inputProps1} = useTextInput()
    let {inputProps:inputProps2} = useTextInput()
    let {inputProps:inputProps3} = useTextInput()
    let {inputProps:inputProps4} = useTextInput()
    let submitHandler = (e)=> {
        e.preventDefault()
        console.log(inputProps1)
        let newGameData = {location: inputProps1.value,
             host: inputProps2.value,
              locationImg: inputProps3.value,
               hostImg: inputProps4.value,
                date: value.valueOf() }
        axios.post('http://localhost:3000/', newGameData)
        console.log('submitting')}
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: '2%', backgroundColor: 'rgb(112,112,112)', borderRadius: 8, padding: '2%' }}>
            <form onSubmit={submitHandler}>
                <InputLabel>Location</InputLabel>
                <input {...inputProps1}></input>
                <Calendar value={value} setValue={setValue}></Calendar>
                <InputLabel>Your Name</InputLabel>
                <input {...inputProps2}></input>
                <InputLabel>Your image URL</InputLabel>
                <input {...inputProps3}></input>
                <InputLabel>Your court image URL</InputLabel>
                <input {...inputProps4}></input>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}