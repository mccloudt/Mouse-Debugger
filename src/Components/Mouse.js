import * as React from "react"

function Mouse(props) {
  return (
    <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    width="350px"
    height="350px"
    viewBox="0 0 770.86 606.5"
    {...props}
  >
    <defs>
      <style>
        {
          "\r\n text{fill:white}\r\n      .cls-1, .cls-2 {\r\n        fill: #fff;\r\n        stroke: #1d1d1b;\r\n        stroke-miterlimit: 10;\r\n      }\r\n\r\n      .cls-2 {\r\n        stroke-width: 0.5px;\r\n      }\r\n\r\n      .cls-3, .cls-4 {\r\n        font-size: 24px;\r\n        font-family: Roboto Mono;\r\n      }\r\n\r\n      .cls-3, .cls-4, .cls-5 {\r\n        fill: #1d1d1b;\r\n      }\r\n\r\n      .cls-4 {\r\n        writing-mode: tb;\r\n        text-orientation: upright;\r\n        glyph-orientation-vertical: 0deg;\r\n      }\r\n    "
        }
      </style>
    </defs>
    <rect className="cls-1" x={32.03} y={13} width={429} height={593} style={{fill:"black", stroke:"#6AE76E", strokeWidth:"5px"}}/>
    <rect className="cls-1" x={32.03} y={13} width={196} height={218} style={{fill: props.leftPressed ? "#6AE76E" : "black", stroke:"#6AE76E", strokeWidth:"5px"}}/>
    <rect className="cls-1" x={265.03} y={13} width={196} height={218} style={{fill: props.rightPressed ? "#6AE76E" : "black", stroke:"#6AE76E", strokeWidth:"5px"}}/>
    <path
      className="cls-2"
      d="M319,336H282V118h37Z"
      transform="translate(-53.97 -105)"
      style={{fill: props.middlePressed ? "#6AE76E" : "black", stroke:"#6AE76E", strokeWidth:"5px"}}
    />
    <rect className="cls-1" x={9.03} y={259} width={23} height={71} style={{fill: props.forwardPressed ? "#6AE76E" : "black", stroke:"#6AE76E", strokeWidth:"5px"}}/>
    <rect className="cls-1" x={9.03} y={330} width={23} height={77} style={{fill: props.backPressed ? "#6AE76E" : "black", stroke:"#6AE76E", strokeWidth:"5px"}}/>
    <text className="cls-3" transform="translate(102.66 122)" style={{fill:"white"}}>
      {"Left"}
    </text>
    <text className="cls-3" transform="translate(339.31 122)" style={{fill:"white"}}>
      {"Right"}
    </text>
    <text className="cls-4" transform="translate(245.07 24)" style={{fill:"white"}}>
      {"Middle"}
    </text>
    <text className="cls-4" transform="translate(17 272.5)" style={{fill:"white"}}>
      {"F"}
    </text>
    <text className="cls-4" transform="translate(17 350.5)" style={{fill:"white"}}>
      {"B"}
    </text>

  </svg>
  )
}

export default Mouse
