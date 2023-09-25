import React from "react";
import Button from "./Button"


function MessageCard() {

    console.log("messagecard calling");

    return (
        <>
            <div className="customCard">
                <h2>sachin</h2>
                <p>Card containers hold all card elements, and their size is determined by the space those elements
                    occupy. Card elevation is expressed by the container.</p>
                <Button/>
            </div>

        </>
    );
}

MessageCard.defaultProps =
    {
        item: "card"
    };


export default MessageCard;