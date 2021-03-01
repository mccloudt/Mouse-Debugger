import React, {Component} from 'react';

const Header = (props) => {
    return (<div>
        <h1 className="header">
            MOUSE-DEBUG
        </h1>
        <em>Due to the potential of abuse, the back & forwards buttons will try to unload the page. You can stop this if you want.</em>
    </div>);
}


export default Header;