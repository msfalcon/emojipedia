import React from "react";
import Dictionary from "./dictionary";
function card(props)
{
    return(
        <Dictionary 
        key={props.id}
        emoji={props.emoji}
        emoji_name={props.emoji_name}
        detail={props.detail}
         />
    );
}
export default card;