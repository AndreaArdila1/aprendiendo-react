//Nivel de componente

import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel',
        isFollowing: false
    },
    {
        userName: 'unknow',
        name: 'Pablo Hernandez',
        isFollowing: false
    },
    {
        userName: 'andrea',
        name: 'Andrea Ardila',
        isFollowing: true
    }
]

const formatUserName = (userName) => `@${userName}`

export function App (){
    return(
        <div className='App'>
            {/* Forma sencilla de renderizar elementos de un componente padre a un hijo */}
            {/* <TwitterFollowCard formatUserName={formatUserName} userName="midudev" name="Nombre de usuario" initialIsFollowing/>
            <TwitterFollowCard formatUserName={formatUserName} name="Pablo Hernandez"/>
            <TwitterFollowCard formatUserName={formatUserName} userName="andrea" name="Andrea Ardila"/> */}

            {/* Renderizando una lista, haciendo uso de funciones JS */}
            {
                users.map(user => {
                    const { userName, name, isFollowing} = user
                    return(
                        <TwitterFollowCard 
                            key = {userName}
                            formatUserName = {formatUserName}
                            userName = {userName} 
                            name = {name} 
                            initialIsFollowing = {isFollowing}>
                        </TwitterFollowCard> 
                    )
                })
            }
        </div>
    )
}