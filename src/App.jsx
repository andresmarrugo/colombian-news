import React,{useState, useEffect} from 'react';
import Article from './components/article'
import './App.css';
const createHash = require('hash-generator');
const axios = require('axios')

function App() {
  const [url, setUrl] = useState(`https://newsapi.org/v2/top-headlines?country=co&apiKey=6d2f58f1e8e04a7290b143496c77f016`)
  const [data, setData]=useState([])
  const [query, setQuery]=useState('Last News')
  console.log(process.env.API_KEY)
  let search=()=>{
    axios.get(url).then((res)=>{
      setData(res.data.articles)
    }).catch((err)=>{
      console.error({err})
    })

  }
 

  useEffect(()=>{
    search()  
  },[url])

  return (
    <div className="App">
      
      <div className="header">
      <div className="title"
      ><h1>El Platanal</h1></div>
      <div>
      <form className="search">
      <div className="group"><input id="searchBar"type="text" placeholder="Search" onChange={
      (e)=>(
      setQuery(e.target.value)
      )
      }/>
      <button onClick={(e)=>{
      e.preventDefault()
      let searchBarText=document.querySelector('#searchBar').value
      if(searchBarText !== ''){
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();
      
      today = yyyy + '-' + mm + '-' + dd; // fecha pal' query
      
      let urlQuery = `https://newsapi.org/v2/everything?q=${query}&from=${today}&sortBy=popularity&apiKey=6d2f58f1e8e04a7290b143496c77f016`
      document.querySelector('#info').innerHTML=`results for: <i>"${query}"</i>`
      document.querySelector('#searchBar').value=''
      setUrl(urlQuery)
      }
      }
      }><span className="entypo-search"></span></button></div>
      </form></div></div>
      <h1 id="info">Last News</h1>
            
        <div id="container">
          {
            data.map(itm =>(
              <Article key={createHash(4)} data={itm}/>
            ))
          }
        </div>
      <footer><div className="social">
        <a href="https://www.linkedin.com/in/andresmarrugo/" target="_blank" rel="noopener noreferrer"><span className="zocial-linkedin"></span></a>
        <a href="https://github.com/andresmarrugo" target="_blank" rel="noopener noreferrer"><span className="zocial-github"></span></a>
        <a href="https://twitter.com/andiesmarrugo" target="_blank" rel="noopener noreferrer"><span className="zocial-twitter"></span></a>
      </div></footer>
    </div>
  );
}

export default App;
