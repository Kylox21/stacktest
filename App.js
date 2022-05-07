import { Button } from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import SelectAirport from "./SelectAirport";

function App() {

    return(
        
        <div>
            <Button>
                <Link to="./SelectAirport">Select Airport</Link>
            </Button>
        </div>
    )
}
export default App;