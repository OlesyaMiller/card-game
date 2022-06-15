import { useEffect, useState } from "react";

const Cards = () => {
    const [data, setData] = useState({ cards: [] });
    

    useEffect(() => {
        // const fetchDeck = () => {
            fetch(`http://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH`)
            .then(res => res.json())
            .then(res => setData(res))
        // }
    }, []);

    return (
        <div>Cards component
            {console.log(data)}
        </div>
    );
}
 
export default Cards;
