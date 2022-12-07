import React from 'react';

export const Space = (props:{id:string}) : JSX.Element=> {
    return (
        <div className="flex flex-col h-32 w-full" id={props.id}></div>
    )
}