import { FC, memo, useEffect } from "react";

const Trends: FC = () => {
  useEffect(() => {}, []);

  // <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"React","geo":"IN","time":"today 12-m"},{"keyword":"Angular","geo":"IN","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"geo=IN&q=React,Angular&date=today 12-m,today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"}); </script>

  return (
    <>
      <div
        id="trends"
        className="flex justify-center items-center text-black bg-red-300 h-96"
      >
        This is Some text
      </div>
    </>
  );
};

export default memo(Trends);
