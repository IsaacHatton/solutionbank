import data from "./data.json"
import { Link } from "react-router-dom";
import corePure2Img from "./bookcovers/core-pure-2.jpg"
import corePure1Img from "./bookcovers/core-pure-1.jpg"
import decision1Img from "./bookcovers/decision-1.jpg"
import decision2Img from "./bookcovers/decision-2.jpg"
import furtherMechanics1Img from "./bookcovers/further-mechanics-1.jpg"
import furtherMechanics2Img from "./bookcovers/further-mechanics-2.jpg"
import furtherPure1Img from "./bookcovers/further-pure-1.jpg"
import furtherPure2Img from "./bookcovers/further-pure-2.jpg"
import furtherStats1Img from "./bookcovers/further-stats-1.jpg"
import furtherStats2Img from "./bookcovers/further-stats-2.jpg"
import pureYear1Img from "./bookcovers/pure-year-1.jpg"
import pureYear2Img from "./bookcovers/pure-year-2.jpg"
import statsAndMechanicsYear1Img from "./bookcovers/stats-and-mechanics-year-1.jpg"
import statsAndMechanicsYear2Img from "./bookcovers/stats-and-mechanics-year-2.jpg"

function Book({ book }){
    const bookImages = {
        "Core Pure 2": corePure2Img,
        "Core Pure Maths 1": corePure1Img,
        "Decision 1": decision1Img,
        "Decision 2": decision2Img,
        "Further Mechanics 1": furtherMechanics1Img,
        "Further Mechanics 2": furtherMechanics2Img,
        "Further Pure 1": furtherPure1Img,
        "Further Pure Maths 2": furtherPure2Img,
        "Further Stats 1": furtherStats1Img,
        "Further Stats 2": furtherStats2Img,
        "Pure Maths Year 1": pureYear1Img,
        "Pure Maths Year 2": pureYear2Img,
        "Stats and Mechanics Year 1": statsAndMechanicsYear1Img,
        "Stats and Mechanics Year 2": statsAndMechanicsYear2Img
    };

    const bookImage = bookImages[book];
    return (
        <>
            <Link className="bookcontainer" to={book}><img alt={book} className="bookimg" src={bookImage}></img></Link>
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
