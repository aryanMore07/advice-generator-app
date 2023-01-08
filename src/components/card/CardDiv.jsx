import React, { useState } from 'react'
import "./cardDiv.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {BsFillDice5Fill, BsPauseFill}  from "react-icons/bs";

function CardDiv() {

    const [adviceId, setAdviceId] = useState("");
    const [advice, setAdvice] = useState("");
    const [color, setColor] = useState("");
    const colors = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];

    function clickHandler() {
        let url = 'https://api.adviceslip.com/advice';

        fetch(url)
        .then(res => res.json())
        .then(data => {
            setAdviceId(data.slip.id);
            setAdvice(data.slip.advice);
        });

        let ranNum = Math.floor(Math.random() * colors.length) + 1;
        let ranNumTwo = Math.floor(Math.random() * colors.length) + 1;

        
        document.querySelector(".card-inner-div").style.backgroundColor = colors[ranNum];
        document.body.style.backgroundColor = colors[ranNumTwo];
        
    }


    
    return (
        <div className='card-div'>
            <Card className="text-center card-inner-div" >
                <Card.Header>Advice #{!adviceId ? "007" : adviceId}</Card.Header>
                <Card.Body>
                    <Card.Title>{!advice ? "Mr Bond, they have a saying in Chicago: 'Once is happenstance. Twice is coincidence. The third time it's enemy action" : advice}</Card.Title>
                    <div className='line-div'>
                        <hr />
                        <BsPauseFill size='5vh' />
                        <hr />
                    </div>
                    <button className='click-btn' onClick={clickHandler}><BsFillDice5Fill /></button>
                </Card.Body>
                    <Card.Footer className="text-muted">Made with 🖤 by aRYN</Card.Footer>
            </Card>
        </div>
    )
}

export default CardDiv;
