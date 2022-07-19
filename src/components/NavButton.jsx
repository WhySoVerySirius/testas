import React from "react";

export default function NavButton({target, currentPage, maxPage, action})
{
    if (target && currentPage, maxPage, action)
    {
        if( target === 'first') {
            return <div onClick={()=>action(1)}>&lt;&lt;</div>
        }
        if( target==='back') {
            return currentPage>1?<div onClick={()=>action(currentPage-1)}>&lt;</div>:<div>&lt;</div>
        }
        if( target==='forward') {
            return currentPage<maxPage?<div onClick={()=>action(currentPage+1)}>&gt;</div>:<div>&gt;</div>
        }
        if( target==='last') {
            return <div onClick={()=>action(maxPage)}>&gt;&gt;</div>
        }
    }
}