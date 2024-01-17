import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import TableCoins from './components/TableCoins';


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () =>{
    try{
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
    setCoins(res.data);
    }
   catch(err){
    console.log(err);
   }
  }

  useEffect(()=>{
    getData();
  }, []);

  return (
    <div className="container">
        <div className='row'>
            <input   type='text' placeholder={'Search a Coin'} className='form-control  text-dark border-0 mt-4 text-center' onChange={e => setSearch(e.target.value)}/>
            <TableCoins coins={coins} search={search}/>
        </div>
    </div>
  );
}

export default App;
