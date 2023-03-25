import React from 'react'
import { SkillsTypes } from './types';

function GetByAllRole(props: SkillsTypes) {
    const {skills} = props;
  return (
    <>
        <ul>
            {skills.map((item) => {
                return <li key={item}>item</li>
            })}
        </ul>
    </>
  )
}

export default GetByAllRole