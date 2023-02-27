import React from "react";
import "../styles.css";

export default function Card(props){
    return(
        <div className="card">
            <img src={props.image} alt = {props.alt}></img>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}