import React, { useState } from "react";

export default function LudoBord() {

    let [moves, setMoves] = useState({
    red : 0, green:0, blue: 0, yellow:0});

    let increment = () => {
        // call back
        setMoves((prevMoves) =>{
         return{...prevMoves, red:prevMoves.red + 1};
        });
    }

   return (
    <>
    <p>Game Begins</p>
    <div className="board">

        <p>Red Moves = {moves.red}</p>
        <button style={{backgroundColor:"red"} } onClick={increment}  >+1</button>

        <p>Green Moves = {moves.green}</p>
        <button style={{backgroundColor:"green"}}>+1</button>

        <p>Blue Moves = {moves.blue}</p>
        <button style={{backgroundColor:"blue"}}>+1</button>

        <p>Yellow Moves = {moves.yellow}</p>
        <button style={{backgroundColor:"yellow", color:"black"}}>+1</button>

    </div>
    </>
    )
};

