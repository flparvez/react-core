import React from 'react';

const Footer = (props) => {
    const Footer={
        fontSize:"20px",
        color:"red",
        marginBottom:"10px"
    }
    return (
        <div>
            <h1>THis is footer</h1>
            <footer style={Footer}>This site created by Copyright {props.name}. He is a {props.job}</footer>
        </div>
    );
}

export default Footer;
