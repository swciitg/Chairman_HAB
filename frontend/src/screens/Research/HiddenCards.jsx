import React from "react";
import Card from "./Card";

export default () => {
    return(
        <div className="hidden md:grid md:grid-cols-3 md:gap-24">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}