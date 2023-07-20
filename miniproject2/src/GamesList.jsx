import {Game} from './Game'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function GamesList() {
    let params = useParams()
    let [listState, setListState] = useState([])
    useEffect(()=>{axios.get('http://localhost:3000')
    .then((res)=>{
        let filteredList = res.data.filter((game) => game.location === params.location)
        let ListOfGames = filteredList.map((game)=> (<Game {...game} key={game.id}></Game>))
        setListState(ListOfGames)
    })},[])
    console.log(listState)
    return(
        <>
        {listState}
        </>
    )
}