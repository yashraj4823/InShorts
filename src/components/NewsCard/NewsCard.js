import React from 'react'

const NewsCard = ({newsItem}) => {

    // console.log(newsItem);

    const fulldate = new Date(newsItem.publishedAt); // Sat  Jan 09 2021  17:45:30  GMT+0530
    var date = fulldate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
    const hour = parseInt(date[4].substring(0, 2)); //
    const time = hour > 12 ? true : false;
    
  return (
    <div className='newsCard flex w-[100%] p-[10px] mb-[25px] rounded shadow-5xl flex-col md:w-[100%]'>
        <img 
          alt={newsItem.title} 
          src={
            newsItem.urlToImage 
            ? newsItem.urlToImage 
            : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
          }
          className='object-cover w-[100%] mb-5 md:mb-0 h-[268px] md:w-[100%] md:h-[100%] md:pb-[20px] '
        />  
        <div className='newsText pb-[10px] flex flex-col justify-between'>
            <div>
                <span className='title text-[22px] leading-[27px] font-customFont'>{newsItem.title}</span>
                <br></br>
                <span className='author text-[12px] font-light leading-[22px] text-[#808290]'>
                    <a href={newsItem.url} target='__blank'>
                        <b>short</b>
                    </a>
                    <span className='muted font-thin'>
                        {" "}
                       by {newsItem.author ? newsItem.author : "unknown"} /{" "}
                       {time
                         ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                         : `${hour}:${date[4].substring(3, 5)} am`}{" "}
                         on {date[2]} {date[1]} {date[3]}, {date[0]}
                    </span>
                   
                </span>
            </div>

            <div className='lowerNewsText flex flex-col justify-between flex-1 pt-[10px] pb-[10px]'>
                <div className='description text-[16px] leading-[22px] text-[#44444d]'>{newsItem.description}</div>
                <span className='readmore text-[12px] font-normal pt-[10px]'>
                    read more at{" "}
                    <a href={newsItem.url} target='__blank' className='no-underline text-black'>
                        <b>{newsItem.source.name}</b>
                    </a>
                </span>
            </div>
        </div>

    </div>
  )
}

export default NewsCard