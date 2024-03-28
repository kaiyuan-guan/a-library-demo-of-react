import React, { useEffect, useState } from 'react';
const Button = ({ onClick, text, backgroundcolor, width, height }) => {
    const myColor = { 'blue': '#81D8D0', 'orange': '#E85827', 'red': '#800020', 'green': '#008C8C', 'broen': '#8F4B28', 'yellow': '#F9DC24', }
    const [bacColor, setBacColor] = useState('#81D8D0');
    const [myWidth, setMyWidth] = useState('50px');
    const [myHeight, setMyHeight] = useState('30px');
    const [myBoxWidth, setBoxMyWidth] = useState('60px');
    const [myBoxHeight, setBoxMyHeight] = useState('40px');
    const [mySpanTop, setMySpanTop] = useState('5px')
    const [mySpanLeft, setMySpanLeft] = useState('5px')
    const [mySpanHeight, setMySpanHeight] = useState('50px')
    const [mySpanWidth, setMySpanWidth] = useState('50px')
    const [myTime, setMyTime] = useState(0)
    useEffect(() => {
        const checkBg = backgroundcolor
        if (checkBg[0] == '#') {
            setBacColor(backgroundcolor)
        } else {
            setBacColor(myColor[backgroundcolor])
        }


    }, [backgroundcolor]);
    useEffect(() => {
        setMyWidth(width);
        setMyHeight(height);
        setMySpanHeight(height)
        setMySpanWidth(width)
        setBoxMyWidth(String(Number(width.slice(0, -2)) + 10) + 'px')
        setBoxMyHeight(String(Number(height.slice(0, -2)) + 10) + 'px')
    }, [width, height]);
    const handleClick = (event) => {
        onClick()
        setTimeout(() => {
            clearInterval(intervalId);
            setMySpanWidth(myWidth);
            setMySpanHeight(myHeight);
            setMySpanTop('5px');
            setMySpanLeft('5px');
        }, 250);
        const intervalId = setInterval(() => {

            setMyTime(prevTime => prevTime + 1);
            setMySpanWidth(prevWidth => `${Number(prevWidth.slice(0, -2)) + 2}px`);
            setMySpanHeight(prevHeight => `${Number(prevHeight.slice(0, -2)) + 2}px`);
            setMySpanTop(prevTop => `${Number(prevTop.slice(0, -2)) - 1}px`);
            setMySpanLeft(prevLeft => `${Number(prevLeft.slice(0, -2)) - 1}px`);


        }, 50);
    };



    return (
        <div style={{ width: myBoxWidth, height: myBoxHeight }}>
            <span style={{ background: bacColor, opacity: 0.3, borderRadius: '5px', width: mySpanWidth, height: mySpanHeight, position: 'absolute', top: mySpanTop, left: mySpanLeft }}></span>
            <button onClick={handleClick} style={{ backgroundColor: bacColor, color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: myWidth, height: myHeight, position: 'absolute', top: '5px', left: '5px' }}>
                {text}
            </button>

        </div>

    );
};

export default Button;
