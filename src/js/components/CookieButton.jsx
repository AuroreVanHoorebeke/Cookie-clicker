import React from 'react';
import ReactDOM from 'react-dom';

class CookieButton extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                amount: 0,
                prodSpeed: 0
            };

    }
    incrementSpeed = (cookiesPerSec) => {
        this.setState({
            prodSpeed: this.state.prodSpeed + cookiesPerSec
        })
    }

    incrementCookie = () => {
        this.setState({
            amount: this.state.amount + 1/*,
            prodSpeed: this.state.prodSpeed + 1*/
        });
    }


/*    countTime = setInterval(() => {
        this.setState((state) => {
            console.log('hey');
            return(

            )
        })
    })*/
    render(){
    return (
        <div className="cookieBox">
            <button className="cookie" onClick={this.incrementCookie}>Click me!</button>
            <div>Cookies: {this.state.amount}</div>
            <div>Cookies/sec: {this.state.prodSpeed}</div>
        </div>
    )}
}
export default CookieButton