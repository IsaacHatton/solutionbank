import { useParams } from "react-router-dom";
import data from "./data.json"

function Link({ exercise }){
    return (
        <>
            <a href={exercise.link}>{exercise.text}</a>
            <br></br>
        </>
    )
}
function Chapter() {
    const { selectedBook , selectedChapter } = useParams();
    console.warn(data[selectedBook][selectedChapter])
    return (
        <>
            <h1>{selectedChapter + " - " + selectedBook}</h1>
            {data[selectedBook][selectedChapter].map(function(data){
                console.error(data)
                return (
                    <Link key={data.text} exercise={data}></Link>
                )
            })}
        </>
    );
}

export default Chapter;
