import { useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { getNews } from "../../Api/NewsApi";

const NewsCard = () => {
  useEffect(() => {
    getNews().then((res) => {
      // console.log(res.articles);
      setdata(res.articles);
    });
  }, []);

  const [data, setdata] = useState<any>();

  //console.log("News", data);
  return (
    <div className=" bg-gray-800 pb-5 rounded-lg items-start">
      <h1 className="text-xl ml-4  pt-4 pb-3 font-bold">What's Happening</h1>
      {data &&
        data.map((each: any, index: any) => (
          <div key={index} className="flex flex-row items-center">
            <a href={each.url} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-row text-base items-baseline hover:bg-gray-700 py-2">
                <p className="text-xs ml-2 mr-2">
                  <GoPrimitiveDot />
                </p>
                <p className="text-sm mr-3" key={index}>
                  {each.title}
                </p>
              </div>
            </a>
            <img src={each.urlToImage} alt="news" className="w-12 h-12 mr-4 rounded-md" />
          </div>
        ))}
    </div>
  );
};

export default NewsCard;