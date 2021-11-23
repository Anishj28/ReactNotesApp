import React from 'react';

const Toggle=({toggleDark})=>{
    return (
            <div className="toggle">
                <h1>Notes App</h1>
                <button 
                className="themebutton"
                 type="button"
                 onClick={
                     ()=>toggleDark(
                         (prev)=> !prev)
                }
                 >Change Theme!!
                 </button>
            </div>
    );
}

export default Toggle;