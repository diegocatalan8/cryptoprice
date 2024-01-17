import React from 'react'

function CoinRow({coin, index, isMobile}) {
    
  return (
    <tr key={coin.key}>
        <td>{index}</td>
        <td>
            <img src={coin.image} alt={coin.name} style={{width: isMobile ? '20%' : '3%'}} className='img-fluid me-4'/>
            {
              !isMobile  && (
                <>
                  <span>{coin.name}</span>
                </>
              )
            }
            <span className='ms-3  text-uppercase'>{coin.symbol}</span>
        </td>
        <td>{coin.current_price}</td>
        {!isMobile && (
          <>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>{coin.price_change_percentage_24h}</td>
            <td>{coin.total_volume}</td>
          </>
        )}
        
    </tr>
  )
}

export default CoinRow