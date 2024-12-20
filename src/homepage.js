import data from "./data.json"

function Book({ book }){
    
    return (
        <>
            <a href={book}>{book}</a>
            <br></br>
        </>
    )
}

function Homepage() {
    return (
        <>
            <h1>Pick a book</h1>
            {Object.entries(data).map( ([key]) => <Book key={key} book={key}></Book>)}
        </>
    );
}

export default Homepage;
