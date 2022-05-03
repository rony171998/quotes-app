import React from 'react';


const ChangeColorBackground = () => {
    const color = ["red", "blue", "green", "pink", "violet","yellow"]
    const randomNum = Math.floor(Math.random() * color.length)
    document.body.style = `background: ${color[randomNum]} `;
    return (
        <div></div>
    );
};

export default ChangeColorBackground;