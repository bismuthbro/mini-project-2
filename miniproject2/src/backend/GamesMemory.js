const Games = require('./Games.json')
const Express = require('express')
const App = Express()
const cors = require('cors')
App.use(cors())
App.use(Express.json())
App.get('/', (req,res)=>{
    res.json(Games)
})
App.put('/',(req,res)=>{
    const userName = req.query.userName
    Games[parseInt(req.query.id)].players.push(userName)
    res.send('done')
})
App.post('/', (req,res)=>{
    console.log(req.body)
    let newGameData = req.body
    newGameData.id = Games.length
    newGameData.players = [newGameData.host]
    let newGameDate = new Date(newGameData.date)
    newGameData.date = newGameDate.getDate() + '-' + newGameDate.getMonth() + '-' + newGameDate.getFullYear()
    Games.push(newGameData)
    res.send('new game added')
})
App.listen(3000, ()=>console.log('listening'))