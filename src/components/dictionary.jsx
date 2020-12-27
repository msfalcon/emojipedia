import React from "react";
function Dictionary(props)
{
    return (
        <div className="box">
            <dl>
            <div>
             <span className="emoji">
                <dt>
                     {props.emoji}
                </dt>

             </span>
               
                <dt>
                    <h2>{props.emoji_name}</h2> 
                </dt>
            </div>
            <div>
                 <dd>
                      {props.detail}
                </dd>

            </div>
                
            </dl>
        </div>

    );
}
export default Dictionary;