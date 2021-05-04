import React from 'react';
import './NewViewer.css';
import NewView from './NewView';

function NewViewer() {
    return (
        <div className="NewViewer">
            <NewView img="/videos/1-disney.mp4"/>
            <NewView img="/videos/1-pixar.mp4"/>
            <NewView img="/videos/1-marvel.mp4"/>
            <NewView img="/videos/1-starwars.mp4"/>

            
        </div>
    )
}

export default NewViewer
