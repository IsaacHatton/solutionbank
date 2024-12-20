import data from "./data.json"
import { useParams } from "react-router";

function Chapter({ book, chapter }){
    
    return (
        <>
            <a href={book + "/" + chapter}>{chapter}</a>
            <br></br>
        </>
    )
}

function Book() {
    let book = useParams().selectedBook
    return (
        <>
            <h1>Pick a chapter - {book}</h1>
            {Object.entries(data[book]).map( ([key]) => <Chapter key={key} book={book} chapter={key}></Chapter>)}
        </>
    );
}

export default Book;
