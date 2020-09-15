import React from "react";
//import { ButtonGroup } from "react-bootstrap";


const Keyboard = ({ addInput }) => {
    return (
        <div className="keypad">
            <button className="roundbtns" name="(" onClick={() => { addInput("("); }}>(</button>
            <button className="roundbtns" name="CE" onClick={() => { addInput("CE"); }}>CE</button>
            <button className="roundbtns" name=")" onClick={() => { addInput(")"); }}>)</button>
            <button className="roundbtns" name="C" onClick={() => { addInput("C"); }}>C</button>
            <br />

            <button className="roundbtns" name="1" onClick={() => { addInput("1"); }}>1</button>
            <button className="roundbtns" name="2" onClick={() => { addInput("2"); }}>2</button>
            <button className="roundbtns" name="3" onClick={() => { addInput("3"); }}>3</button>
            <button className="roundbtns" name="+" onClick={() => { addInput("+"); }}>+</button>
            <br />

            <button className="roundbtns" name="4" onClick={() => { addInput("4"); }}>4</button>
            <button className="roundbtns" name="5" onClick={() => { addInput("5"); }}>5</button>
            <button className="roundbtns" name="6" onClick={() => { addInput("6"); }}>6</button>
            <button className="roundbtns" name="-" onClick={() => { addInput("-"); }}>-</button>
            <br />

            <button className="roundbtns" name="7" onClick={() => { addInput("7"); }}>7</button>
            <button className="roundbtns" name="8" onClick={() => { addInput("8"); }}>8</button>
            <button className="roundbtns" name="9" onClick={() => { addInput("9"); }}>9</button>
            <button className="roundbtns" name="*" onClick={() => { addInput("*"); }}>x</button>
            <br />

            <button className="roundbtns" name="." onClick={() => { addInput("."); }}>.</button>
            <button className="roundbtns" name="0" onClick={() => { addInput("0"); }}>0</button>
            <button className="roundbtns" name="=" onClick={() => { addInput("="); }}>=</button>
            <button className="roundbtns" name="/" onClick={() => { addInput("/"); }}>÷</button>

        </div>
    );
}

export default Keyboard;