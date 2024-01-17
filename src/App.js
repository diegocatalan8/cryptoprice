import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import TableCoins from './components/TableCoins';


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () =>{
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
    setCoins(res.data);
  }

  useEffect(()=>{
    getData();
  }, []);

  return (
    <div className="container">
        <div className='row'>
            <input onChange={e => setSearch(e.target.value)} type='text' placeholder='Search a Coin' className='form-control bg-dark text-light border-0 mt-4 text-center' />
            <TableCoins coins={coins} search={search}/>
        </div>
    </div>
  );
}

export default App;
