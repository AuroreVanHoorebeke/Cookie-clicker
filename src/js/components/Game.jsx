import React from 'react'

import cookieButton from '../../img/fullcookieIcon.png';
import '../../index.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            prodSpeed: 0,
            items: [
                {id: 0, name: 'apprentice', qty: 0, price: 100, cookiesSec: 5, func: this.buyItem},
                {id: 1, name: 'baker', qty: 0, price: 250, cookiesSec: 10, func: this.buyItem},
                {id: 2, name: 'oven', qty: 0, price: 500, cookiesSec: 15, func: this.buyItem},
                {id: 3, name: 'bakery', qty: 0, price: 2000, cookiesSec: 30, func: this.buyItem}
            ]
        }
    }

    incrementCookie = () => {
        this.setState({
            amount: this.state.amount + 1
        });
    }
    



    autoIncrementCookies() {
        this.setState(() => {
            return {
                amount: this.state.amount += this.state.prodSpeed
            }
        })
    }

    incrementInterval = setInterval(() => {
        this.autoIncrementCookies();
    },1000)

    buyItem = (id) => {
        if(this.state.amount >= this.state.items[id].price){

            this.setState({

                qty: this.state.items[id].qty += 1,
                amount: this.state.amount -= this.state.items[id].price,
                prodSpeed: this.state.prodSpeed + this.state.items[id].cookiesSec

            })

        } else {
            console.log('no')
        }
    }

    Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render(){
            const itemList = this.state.items.map((item) =>(
                <div>
                    <div className={`item-${item.name}`}>
                        <h3>{this.Capitalize(item.name)}</h3>
                        <button className={`buy-${item.name}`} onClick={() => this.buyItem(item.id)}>Buy {item.name}</button>
                        <p>qty {item.qty}</p>
                        <p>price {item.price}</p>
                        <p>cookies/sec {item.cookiesSec}</p>
                    </div>
                </div>
            ))

        const itemStats = this.state.items.map((item) =>(
                <div className={`stats-${item.name}`}>
                        <h3 className="ml-5 mr-5">{this.Capitalize(item.name)} {item.qty}</h3>
                </div>
            ))

        return (
            <>
                <div className="cookieBox">
                    <img src={cookieButton} className="cookie" onClick={this.incrementCookie}/>
                    <div>Cookies: {this.state.amount}</div>
                    <div>Cookies/sec: {this.state.prodSpeed}</div>
                </div>

                <div className="items">
                    {itemList}
                </div>
            </>
        )
    }

}
export default Game