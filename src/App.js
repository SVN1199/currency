import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
  const [amount, setAmount] = useState('')
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('INR')
  const [exchangerate, setExchangeRate] = useState(0)
  const [convertedAmt, setConvertedAmt] = useState(null)

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value)
    if (value >= 0) {
      setAmount(isNaN(value) ? 0 : value)
    }
  }


  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value)
  }

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value)
  }


  useEffect(() => {
    const getCurrencyData = async () => {
      const url = `https://v6.exchangerate-api.com/v6/513dd45ab8e1af2cbc0a7c24/latest/${fromCurrency}`;
      try {
        const response = await axios.get(url)
        console.log(response.data)
        setExchangeRate(response.data.conversion_rates[toCurrency])
      } catch (error) {
        console.log(error.message)
      }
    }
    getCurrencyData()
  }, [fromCurrency, toCurrency])

  useEffect(() => {
    if (exchangerate !== null) {
      setConvertedAmt((amount * exchangerate).toFixed(2))
    }
  }, [amount, exchangerate])

  return (
    <div className="container">
      <div className="row center-box">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="curr_body">
            <div className='inside'>
              <div className="heading">Currency Converter</div>
              <form>
                <label htmlFor="">Amount</label>
                <input
                  type="text"
                  placeholder='Enter Amount'
                  value={amount}
                  onChange={handleAmountChange} /><br />
                <label>From Currency</label>
                <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                  <option value="USD">United States Dollar</option>
                  <option value="EUR">Euro</option>
                  <option value="JPY">Japanese Yen</option>
                  <option value="GBP">British Pound Sterling</option>
                  <option value="AUD">Australian Dollar</option>
                  <option value="CAD">Canadian Dollar</option>
                  <option value="CHF">Swiss Franc</option>
                  <option value="CNY">Chinese Yuan Renminbi</option>
                  <option value="INR">Indian Rupee</option>
                  <option value="BRL">Brazilian Real</option>
                  <option value="RUB">Russian Ruble</option>
                  <option value="KRW">South Korean Won</option>
                  <option value="MXN">Mexican Peso</option>
                  <option value="SGD">Singapore Dollar</option>
                  <option value="NZD">New Zealand Dollar</option>
                  <option value="ZAR">South African Rand</option>
                  <option value="HKD">Hong Kong Dollar</option>
                  <option value="TRY">Turkish Lira</option>
                  <option value="SEK">Swedish Krona</option>
                  <option value="NOK">Norwegian Krone</option>
                  <option value="DKK">Danish Krone</option>
                  <option value="PLN">Polish Zloty</option>
                  <option value="THB">Thai Baht</option>
                  <option value="IDR">Indonesian Rupiah</option>
                  <option value="MYR">Malaysian Ringgit</option>
                  <option value="ILS">Israeli Shekel</option>
                  <option value="PHP">Philippine Peso</option>
                  <option value="ARS">Argentine Peso</option>
                  <option value="COP">Colombian Peso</option>
                  <option value="SAR">Saudi Riyal</option>
                </select>


                <label htmlFor="">To Currency</label>
                <select value={toCurrency} onChange={handleToCurrencyChange}>
                  <option value="USD">United States Dollar</option>
                  <option value="EUR">Euro</option>
                  <option value="JPY">Japanese Yen</option>
                  <option value="GBP">British Pound Sterling</option>
                  <option value="AUD">Australian Dollar</option>
                  <option value="CAD">Canadian Dollar</option>
                  <option value="CHF">Swiss Franc</option>
                  <option value="CNY">Chinese Yuan Renminbi</option>
                  <option value="INR">Indian Rupee</option>
                  <option value="BRL">Brazilian Real</option>
                  <option value="RUB">Russian Ruble</option>
                  <option value="KRW">South Korean Won</option>
                  <option value="MXN">Mexican Peso</option>
                  <option value="SGD">Singapore Dollar</option>
                  <option value="NZD">New Zealand Dollar</option>
                  <option value="ZAR">South African Rand</option>
                  <option value="HKD">Hong Kong Dollar</option>
                  <option value="TRY">Turkish Lira</option>
                  <option value="SEK">Swedish Krona</option>
                  <option value="NOK">Norwegian Krone</option>
                  <option value="DKK">Danish Krone</option>
                  <option value="PLN">Polish Zloty</option>
                  <option value="THB">Thai Baht</option>
                  <option value="IDR">Indonesian Rupiah</option>
                  <option value="MYR">Malaysian Ringgit</option>
                  <option value="ILS">Israeli Shekel</option>
                  <option value="PHP">Philippine Peso</option>
                  <option value="ARS">Argentine Peso</option>
                  <option value="COP">Colombian Peso</option>
                  <option value="SAR">Saudi Riyal</option>
                </select>
              </form>
              <div className="answer">{`${amount || 0} ${fromCurrency} is equal to ${convertedAmt} ${toCurrency}`}</div>
              <div className="copyright">
                Designed By Vasanth S
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  )
}

export default App