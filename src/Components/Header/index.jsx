import React from "react"; 
class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render (){
        return (
            <div>
                <div className="container">
                    <ul>
                        <li><a href="/">首页</a></li>
                        <li><a href="/About.html">About</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;