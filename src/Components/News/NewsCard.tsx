import { useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { getNews } from "../../Api/GetNews";

const NewsCard = () => {
  const [data, setdata] = useState<any>();

  useEffect(() => {
    getNews().then((res) => {
      // console.log(res.value);
      res && setdata(res.value);
    });
  }, []);

  //console.log("Data ", data && data[0].image.thumbnail.contentUrl);

  return (
    <div className="sticky bg-white text-black rounded-lg items-start">
      <h1 className="text-lg ml-4 pt-3 pb-2 font-bold font-Sora">Top News</h1>

      {data &&
        data.map(
          (each: any, index: any) =>
            index < 5 && (
              <div key={index} className="flex flex-row items-center">
                <a href={each.url} target="_blank" rel="noopener noreferrer" className="flex items-center hover:bg-gray-200 py-2">
                  <div className="flex flex-row text-base items-baseline">
                    <p className="text-xs ml-2 mr-2">
                      <GoPrimitiveDot />
                    </p>
                    <p className="text-sm mr-3 font-Sora" key={index}>
                      {each.name}
                    </p>
                  </div>
                  {each.image?.thumbnail.contentUrl && (
                    <img
                      src={each.image.thumbnail.contentUrl}
                      alt="news"
                      className="w-14 h-14 mr-4 rounded-sm"
                    />
                  )}
                </a>
              </div>
            )
        )}
    </div>
  );
};

export default NewsCard;
