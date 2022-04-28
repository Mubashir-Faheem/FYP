import {Autocomplete} from "@mui/material";
import React from "react";


export default function SearchBar({data,placeholder}){
return(

    <div className="search">
        <div className="searchinput">
           
            <Autocomplete
            id="custom-input-demo"
            options={data}
            getOptionalLabel={(opt) => opt.title}
            renderInput={(params)=>(
                <div ref={params.InputProps.ref}>
                <input type="text"{...params.InputProps} placeholder={placeholder} autoFocus="true"/>
                </div>
            )}
                >
            </Autocomplete>

        </div>

    </div>
)
}
