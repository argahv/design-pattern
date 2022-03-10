import React from "react";
import ReactDOM from "react-dom";

import { Select } from "@ds.a/react";

import "@ds.a/scss/lib/Utilities.css";
import "@ds.a/scss/lib/Text.css";
import "@ds.a/scss/lib/Margin.css";
import "@ds.a/scss/lib/Select.css";
import "@ds.a/scss/lib/global.css";

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

ReactDOM.render(
  <div style={{ padding: "40px" }}>
    <Select
      options={options}
      // renderOption={({ option, getOptionRecommendedProps }) => (
      //   <p {...getOptionRecommendedProps}>{option.label}</p>
      // )}
    />
  </div>,
  document.getElementById("root")
);
