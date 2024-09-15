import { Container } from '@mui/material';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

const NewsContent = ({newsArray, newsResults, loadMore, setLoadMore}) => {
  return (
    <Container maxWidth='md'>
        <div className='content flex flex-col items-center p-[20px]'>
            <div className='downloadMessage w-[95%] lg:flex items-center bg-[#f44336] h-[48px] pl-[50px] 
                         pr-[50px] mt-[20px] mb-[35px] text-white shadow-5xl hidden'
            >
               <span className='downloadText flex-1'>
                For the best experience use inshorts app on your smartphone.
               </span>
               <img
                 alt="app store"
                 height="80%"
                 width="15%"
                 src="https://assets.inshorts.com/website_assets/images/appstore.png"
                />
                <img
                 alt='play store'
                 height="80%"
                 width="15%"
                 src='https://assets.inshorts.com/website_assets/images/appstore.png' 
                />
            </div>
            
            {
              newsArray.map((newsItem, index) => (
                <div key={index}>
                <NewsCard newsItem={newsItem}></NewsCard></div>
              ))
            }
            

            {
              loadMore <= newsResults && (
                <>
                 <hr></hr>
                 <button 
                  className='load-more cursor-pointer bg-white shadow-5xl pt-[7px] pb-[7px] pr-[25px] pl-[25px] text-[13px] mt-[8px]'
                  onClick={()=>{setLoadMore(loadMore+20)}}
                 >
                  Load More
                 </button>
                </>
              )
            }
            
        </div>
    </Container>
  )
};

export default NewsContent;