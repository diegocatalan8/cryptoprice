import React from 'react'
import CoinRow from './CoinRow'

const TableCoins = ({coins, search}) => {


  const filterCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
  });

  const titles = ['#', 'Coin', 'Price', 'Price Change', '24 Volume']
  return (
    <table className='table table-dark mt-4 table-hover'>
        <thead>
            <tr>
                {
                    titles.map((item)=>(
                        <th>{item}</th>
                    ))
                }
            </tr>
        </thead>
        <tbody>
            {
                filterCoins.map((coin, index)=>(
                    <CoinRow coin={coin} key={index} index={index + 1}/>
                ))
            }
        </tbody>
    </table>
  )
}

export default TableCoins