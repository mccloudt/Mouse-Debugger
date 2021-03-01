import React, {Component} from 'react'
import './MouseArea.scss';
import Mouse from './Mouse'
class MouseArea extends Component{
    constructor(props){
        super(props);
        this.state = {
            leftBtn: false,
            middleBtn: false,
            rightBtn: false,
            backBtn: false,
            fwdBtn: false,
            inputs: [],
            time: '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.clickedColor = "#3f1";
        this.setTime = this.setTime.bind(this);
        this.clearLog = this.clearLog.bind(this);
    }


    componentDidMount(){
        document.getElementsByTagName('html')[0].addEventListener('contextmenu', (event) => {
            event.preventDefault();
            return false;
        });
        document.getElementsByTagName('html')[0].addEventListener('scroll', (e) => e.preventDefault());
        document.getElementsByTagName('html')[0].addEventListener('wheel', (e) => e.preventDefault());
        document.getElementsByTagName('html')[0].addEventListener('mousedown', this.handleClick)
        window.addEventListener('beforeunload', (e) => {
            e.preventDefault();
            e.returnValue = '';
        })
        this.setTime();
    }

    setTime(){
        setInterval(() => {
            let d = new Date();
            this.setState({time: d.toLocaleTimeString()});
        }, 1000);
    }

    clearLog(){
        this.setState({inputs: []})
    }

    handleClick(e){
        console.log(e.button);
        let d = new Date();
        switch(e.button){
            
            case 2: 
                this.setState({rightBtn: true, inputs: [...this.state.inputs, {text: "You pressed the right button", time: d.toLocaleTimeString().replace(/([A-Z])\w+/g, "").trimEnd() + `.${d.getMilliseconds()}`}]})
                setTimeout(() => {
                    this.setState({rightBtn: false})
                }, 5)
                break;
            case 0: 
                this.setState({leftBtn: true, inputs: [...this.state.inputs, {text: "You pressed the left button", time: d.toLocaleTimeString().replace(/([A-Z])\w+/g, "").trimEnd() + `.${d.getMilliseconds()}`}]})
                setTimeout(() => {
                    this.setState({leftBtn: false})
                }, 5)
                break;
            case 1: 
                this.setState({middleBtn: true, inputs: [...this.state.inputs, {text: "You pressed the middle button", time: d.toLocaleTimeString().replace(/([A-Z])\w+/g, "").trimEnd() + `.${d.getMilliseconds()}`}]})
                setTimeout(() => {
                    this.setState({middleBtn: false})
                }, 5)
                break;
            case 4: 
                this.setState({fwdBtn: true, inputs: [...this.state.inputs, {text: "You pressed the forward button", time: d.toLocaleTimeString().replace(/([A-Z])\w+/g, "").trimEnd() + `.${d.getMilliseconds()}`}]})
                setTimeout(() => {
                    this.setState({fwdBtn: false})
                }, 5)
                break;
            case 3: 
                this.setState({backBtn: true, inputs: [...this.state.inputs, {text: "You pressed the back button", time: d.toLocaleTimeString().replace(/([A-Z])\w+/g, "").trimEnd() + `.${d.getMilliseconds()}`}]})
                setTimeout(() => {
                    this.setState({backBtn: false})
                }, 5)
                break;
        }
    }

    render(){
        const today = new Date();
        const inputLog = this.state.inputs.slice(0).reverse().map((x,i) => {
            return <li className="inputItem" key={Date.now + Math.random() }>
                <p>Entry #{this.state.inputs.length-i} - {x.text} - {x.time}</p>
                
                
                </li>
        })
        const leftPress = this.state.inputs.filter((x) => {
            return x.text.indexOf("left") !== -1
        }).length
        const rightPress = this.state.inputs.filter((x) => {
            return x.text.indexOf("right") !== -1
        }).length
        const middlePress = this.state.inputs.filter((x) => {
            return x.text.indexOf("middle") !== -1
        }).length
        const forwardPress = this.state.inputs.filter((x) => {
            return x.text.indexOf("forward") !== -1
        }).length
        const backPress = this.state.inputs.filter((x) => {
            return x.text.indexOf("back") !== -1
        }).length
        return (<div>
            <p className="time">Time: {this.state.time}</p>
            <div className="mouse-body">
                <Mouse 
                    rightPressed={this.state.rightBtn}
                    leftPressed={this.state.leftBtn}
                    middlePressed={this.state.middleBtn}
                    forwardPressed={this.state.fwdBtn}
                    backPressed={this.state.backBtn}
                />
            </div>
            <p>
                {leftPress} Left - {rightPress} Right - {middlePress} Middle -  {forwardPress} Forward - {backPress} Back
            </p>
            <div className="inputLogContainer">
                <ul className="inputLog">
                    {inputLog}
                </ul>
            </div>
            {this.state.inputs.length > 0 && <button className="clearLog" onClick={this.clearLog}> CLEAR-LOG</button>} 
        </div>)
    }

}

export default MouseArea;