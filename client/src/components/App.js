import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
    state = {
        walletInfo: {}
    };

    componentDidMount() {
        fetch(`${document.location.origin}/api/wallet-info`)
            .then(response => response.json())
            .then(json => this.setState({ walletInfo: json}));
    }

    render() {
        const { address, balance} = this.state.walletInfo;

        return(
            <div className="App">
                <div>
                    Welcome to the blockchain!
                </div>
                <br/>
                <div>
                    <div><Link to='/blocks'>Blocks</Link></div>
                    <div><Link to='/conduct-transaction'>Conduct a Transaction</Link></div>
                    <div><Link to='/transaction-pool'>Transaction Pool</Link></div>
                </div>
                <div className="WalletInfo">
                    <div>
                        Address: {address}
                    </div>
                    <div>
                        Balance: {balance}
                    </div>
                </div>
            </div>
        )
    }
}
export default App;