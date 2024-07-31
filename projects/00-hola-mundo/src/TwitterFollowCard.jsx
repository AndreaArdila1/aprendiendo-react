import { useState } from "react";

export function TwitterFollowCard ({ formatUserName, userName = "unknown", name, initialIsFollowing}) {
    //Crear una variable para guardar el estado incial
    // const state = useState(false); //Devuelve array de 2 posiciones
    // const isFollowing = state[0]; //Valor del estado
    // const setIsFollowing = state[1]; //Función que permite actualizar el estado
    
    //Forma corta de representar lo anterior (Equivalencia):
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const handleClick = () => {
        //Cambia el estado o valor que se tiene incialmente
        setIsFollowing(!isFollowing)
    }

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt="avatar" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                {/* En React todo es más declarativo. No es necesario addEventListener*/}
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                    
                </button>
            </aside>
        </article>
    )
}