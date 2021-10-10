import React, { useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { getNews } from "../../Api/NewsApi";

const NewsCard = () => {
  useEffect(() => {
    getNews().then((res) => {
      //console.log(res.articles);
      setdata(res.articles);
    });
  }, []);

  const [data, setdata] = useState<any>();

  //console.log("News", data);
  return (
    <div className="overflow-hidden h-96">
      <h1 className="text-xl font-serif mx-3 mt-4">Tech News</h1>
      {data &&
        data.map((each: any, index: any) => (
          <div key={index}>
            <a href={each.url} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-row text-base items-baseline py-2 px-2 border-b-2 border-gray-200 mt-1">
                <p className="text-xs mr-2">
                  <GoPrimitiveDot />
                </p>
                <p key={index}>{each.title}</p>
              </div>
            </a>
          </div>
        ))}
    </div>
  );
};

export default NewsCard;
