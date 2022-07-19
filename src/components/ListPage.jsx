import React, {useState, useEffect} from "react";
import NavButton from "./NavButton";
import CustomizedTables from "./Table";
import MultipleSelectCheckmarks from "./TableSelector";

export default function ListPage()
{
    const [characters, setCharacters] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false)
    const [page, setPage] = useState(1);
    const [columns, setColumns] = useState([
        'id',
        'name',
        'status',
        'species',
        'type',
        'gender',
        'origin',
        'location',
        'image'
    ]);

    useEffect(
        ()=>{
            fetch(`https://rickandmortyapi.com/api/character/?page=${page}`, {method: 'GET'})
                .then(res=>res.json())
                .then(res=>setCharacters(res))
                .catch(err=>setError(true))
                .finally(setLoaded(true));
            return setCharacters(null)
        },
        [page]
    )

    if(!error && loaded && characters) {

        return (
            <div className="table-nav-outter-container">
                    <div className="nav">
                    <MultipleSelectCheckmarks defaultCol={columns} columnChange={setColumns}/>
                    </div>
                <div className="table-container">
                    <CustomizedTables data={characters.results} columns={columns}/>
                </div>
                <div className="navigation">
                    <NavButton target={'first'} currentPage={page} maxPage={characters.info.pages} action={setPage}/>
                    <NavButton target={'back'} currentPage={page} maxPage={characters.info.pages} action={setPage}/>
                    <input type="text" className="page-display" value={page} disabled/>
                    <NavButton target={'forward'} currentPage={page} maxPage={characters.info.pages} action={setPage}/>
                    <NavButton target={'last'} currentPage={page} maxPage={characters.info.pages} action={setPage}/>
                </div>
            </div>
        )
    }
    return (
        <h1>Loading...</h1>
    )
}