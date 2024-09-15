import React, { useEffect, useState } from 'react';
import Navinshorts from './components/Navinshorts';
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';
import Footer from './components/Footer/Footer';

function App() {

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);



  const newsApi = async () => {
    try{

      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API}&category=${category}&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
     
      setNewsResults(news.data.totalResults);
      console.log("news array",newsArray);
      console.log("news results",newsResults);
    }
    catch(error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  },[newsResults, category, loadMore]);

  return (
    <div className="App">
      <Navinshorts setCategory={setCategory}></Navinshorts>

      <NewsContent
        newsArray={newsArray} 
        newsResults={newsResults}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      >  
      </NewsContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
