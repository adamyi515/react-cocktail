import React from 'react';

import './about.styles.css';

const About = () => {
    return(
        <div className='about'>
            <h1>About TheCocktailDB</h1>
            <p>
                This website uses the https://www.thecocktaildb.com/ API, an open, crowd-sourced database of drinks and cocktails
                from around the world. Search to your liking!
            </p>
        </div>
    )
}

export default About;