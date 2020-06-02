import React from 'react';
import EpisodeOne from"./Episodes/one.mp3"

const Episodes = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h4>Episode: 1</h4>
                <p>Wilt that Kale with Onions Garlic and Tomato</p>
                <div><audio src={EpisodeOne} preload="auto" controls/></div>
                
            </header>
        </div>
    )
}
export default Episodes;