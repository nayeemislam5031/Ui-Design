import {} from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import News from './Components/News/News';

function App() {
  const [articles,setArticles] = useState([]);
  useEffect( ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=bf09d354279c471f9100f6bd15d9283e`
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  } ,[])

  return (
    <div>
    
    {
      articles.map(article => <News article={article}></News>)
    }

    </div>
    
  );
}

export default App;
