import data from "./data.json"
import { useParams, Link } from "react-router";

function HomeButton(){
    return (
        <Link className="link" to="/">Back to book selection</Link>
    )
}


function Chapter({ book, chapter }){
    return (
        <>
            <Link className="link" to={chapter}>{chapter}</Link>
            <br></br>
        </>
    )
}

function Book() {
    let book = useParams().selectedBook
    return (
        <>
            <HomeButton></HomeButton>
            <h1>Pick a chapter - {book}</h1>
            {Object.entries(data[book]).map( ([key]) => <Chapter key={key} book={book} chapter={key}></Chapter>)}
        </>
    );
}

export default Book;
