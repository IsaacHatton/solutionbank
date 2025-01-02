import { useParams, Link } from "react-router-dom";
import data from "./data.json"

function HomeButton({ selectedBook }){
    return (
        <Link className="link" to={"/" + selectedBook}>Back to chapter selection</Link>
    )
}

function ELink({ exercise }){
    return (
        <>
            <a className="link" href={exercise.link}>{exercise.text}</a>
            <br></br>
        </>
    )
}
function Chapter() {
    const { selectedBook , selectedChapter } = useParams();
    console.warn(data[selectedBook][selectedChapter])
    return (
        <>
            <HomeButton selectedBook={selectedBook}></HomeButton>
            <h1>{selectedChapter + " - " + selectedBook}</h1>
            {data[selectedBook][selectedChapter].map(function(data){
                console.error(data)
                return (
                    <ELink key={data.text} exercise={data}></ELink>
                )
            })}
        </>
    );
}

export default Chapter;
