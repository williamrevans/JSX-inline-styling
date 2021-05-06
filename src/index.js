import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

const imageStyle = {
  height: "100px",
  width: "100px"
};

customStyle.color = "blue";
customStyle.fontSize = "smaller";

ReactDOM.render(
  <div>
    <img
      className="food-img"
      style={imageStyle}
      alt="taco town"
      src="https://images.squarespace-cdn.com/content/v1/590be7fd15d5dbc6bf3e22d0/1502767705602-P34YV2BMBOWRXOKB7Z7W/ke17ZwdGBToddI8pDm48kKDKtHioz13A6gTD6cP2SJZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ooWhOa5cxQSJsU3rXf8luX33ZLveKUc0IfIDXzCtWBDa4GLkaq2lSHIaS7p2YxCXg/tacotown.jpg?format=2500w"
    ></img>
    <h1 style={customStyle}>Hello World!</h1>
  </div>,
  document.getElementById("root")
);
