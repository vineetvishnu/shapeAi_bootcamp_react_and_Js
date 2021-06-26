import React from 'react';

function Footer() {
    return (
        <footer>
            <p>Copyright by ShapeAI @ <span>{new Date().getFullYear()}</span></p>
        </footer>
    );
}

export default Footer;