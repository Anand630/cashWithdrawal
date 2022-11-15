import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onWithdrawal} = props
  const {denomination} = denominationDetails

  const onDenominationTap = event => {
    console.log(event.target.innerText)
    const withdrawalAmount = event.target.innerText
    onWithdrawal(withdrawalAmount)
  }

  return (
    <li>
      <button onClick={onDenominationTap} type="button">
        {denomination}
      </button>
    </li>
  )
}

export default DenominationItem
