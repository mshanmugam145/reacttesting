import React, { useState } from 'react'
import { SkillsTypes } from './types';

function QueryByRole(props: SkillsTypes) {
    const {skills} = props;
    const [isLogged, setIsLogged] = useState(false);
    
    return (
    <>
        <ul>
            {skills.map((item) => {
                return <li key={item}>item</li>
            })}
        </ul>
        {isLogged ? (<button>Start Learning</button>) : 
        (<button onChange={() => setIsLogged(true)}>Login</button>)}    
    </>
  )
}

export default QueryByRole