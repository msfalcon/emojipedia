import React from "react";
import Title_heading from "./heading";
import Cardmap from "./map_emoji";

function App()
{
    return (
        <div >
        <span className="app_heading">
        <Title_heading />
        </span>
        <span className="app_div">
        <Cardmap />
        </span>
        </div>  );
}
export default App;