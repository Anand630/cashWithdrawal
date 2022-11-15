import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

const denominationsAvailable = [
  {
    id: 1,
    denomination: 50,
  },
  {
    id: 2,
    denomination: 100,
  },
  {
    id: 3,
    denomination: 200,
  },
  {
    id: 4,
    denomination: 500,
  },
]

export default class CashWithdrawal extends Component {
  state = {amount: 2000}

  onWithdrawal = amountWithdrawn => {
    const {amount} = this.state

    if (amount > 0 && amount - amountWithdrawn >= 0) {
      console.log(`withdrawal successful: Rs. ${amountWithdrawn}`)
      this.setState({amount: amount - amountWithdrawn})
    }
  }

  render() {
    const {amount} = this.state
    return (
      <div className="bg-container">
        <div className="cash-withdrawal-card">
          <div className="user-details-container">
            <div className="profile-logo-container">
              <p className="profile-logo">S</p>
            </div>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="balance-details-container">
            <p className="your-balance-indication">Your Balance</p>
            <div className="balance-display-container">
              <p className="amount-display">{amount}</p>
              <p className="in-rupees-indication">In Rupees</p>
            </div>
          </div>

          <div className="withdrawal-amount-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="choose-sum-indication">CHOOSE SUM (IN RUPEES)</p>
            <ul className="withdrawal-amount-denominations-container">
              {denominationsAvailable.map(eachDenominationDetails => (
                <DenominationItem
                  denominationDetails={eachDenominationDetails}
                  onWithdrawal={this.onWithdrawal}
                  key={eachDenominationDetails.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
