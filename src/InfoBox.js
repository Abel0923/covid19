import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";
function InfoBox({ title, cases, total, active, isRed, ...props }) {
  return (
    // info--selected because it is modified class
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" className="infoBox__title">
          {" "}
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"} `}>
          {cases} Cases
        </h2>
        <Typography color="textSecondary" className="infoBox__total">
          {" "}
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
