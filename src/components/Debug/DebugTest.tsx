import React, { useEffect, useState } from 'react'
import { SkillsTypes } from './types';

function DebugTest(props: SkillsTypes) {
    const {skills} = props;
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLogged(true);
        }, 1020)
    }, [])
    
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

export default DebugTest