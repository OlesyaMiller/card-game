import { useEffect, useState } from "react";
import axios from "axios";

const Cards = () => {

    const [deck_id, getDeckId] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const result = await axios(`http://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH`);
            getDeckId(result.deck_id);
        };
        fetchData();
    });

    const [deck, getDeck] = useState();    

    useEffect(() => {
        const fetchData = async() => {
            const result = await axios(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=12`);
            getDeck(result);
        };
        fetchData();
    });

    return (
        <div>Cards component
            {console.log('deck',deck)}
        </div>
    );

}
 
export default Cards;
