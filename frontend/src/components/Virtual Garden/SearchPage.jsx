// import { Autocomplete, TextField } from "@mui/material";
import React from "react";

export default function SearchPage({ data, placeholder, setTitle }) {
  const newData = data.map((d) => d.name);

  return (
    <div className="search">
      <div className="searchinput">
        <autocomplete
          id="custom-input-demo"
          options={newData}
          getOptionSelected={(option) => option.title}
          onChange={(event, value) => setTitle(value)}
          renderInput={(params) => <textField {...params} label="Plants" />}
        />
      </div>
    </div>
  );
}
