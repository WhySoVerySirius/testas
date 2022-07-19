import React, {useState, useEffect} from "react";
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
            <div className="table-container">
                <div className="nav">
                <MultipleSelectCheckmarks defaultCol={columns} columnChange={setColumns}/>
                </div>
                <CustomizedTables data={characters.results} columns={columns}/>
                <div className="navigation">
                    <div className="" onClick={()=>setPage(1)}>&lt;&lt;</div>
                    <div className="" onClick={()=>setPage(page-1)}>&lt;</div>
                    <div className="page-display">{page}</div>
                    <div className="" onClick={()=>setPage(page+1)}>&gt;</div>
                    <div className="" onClick={()=>setPage(characters.info.pages)}>&gt;&gt;</div>
                </div>
            </div>
        )
    }
    return (
        <h1>Loading...</h1>
    )
}