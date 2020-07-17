import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import { fetchCharacters } from '../store/actions'

const CharacterList = (props) => {
    useEffect(() => {
        //call the action creator
        props.fetchCharacters();
    }, [])
    return (
        <div>
            {props.isLoading && <h4>Loading Characters</h4>}
            {props.error && (<p className='error'>Error: {props.error}</p>)}
            {props.characters.length > 0 && (
                <div className="character-container">
                    {props.characters.map(character => (
                        <div className='character'>
                            <img src ={character.image} />
                            <h4>{character.name}</h4>
                            <p>{character.species}</p>
                        </div>
                    ))}

                </div>)}
        </div>
    )
}

const mapStateToProps= state => {
     return {
         isLoading: state.isLoading,
         characters: state.characters,
         error: state.error
     }
}

export default connect(
    mapStateToProps,
    { fetchCharacters }
)(CharacterList)