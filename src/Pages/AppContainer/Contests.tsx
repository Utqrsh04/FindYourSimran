import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import getAllContest from "../../api/getContest";
import "./Contests.css";

const Contests = () => {
  const [allContest, setAllContest] = useState<any>([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getAllContest().then((res) => setAllContest(res));
  }, []);

  console.log(allContest);

  const filterContests = allContest.filter((contest: any) =>
    contest.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-16 min-h-screen bg-gray-300">
      <div className="w-full py-7 min-h-full flex flex-col items-center space-y-5 justify-center ">
        
        <div className="w-96 sticky top-20 flex justify-around space-x-4 items-center ">
          <div className=" flex mx-auto">
            <div className="flex ">
              <input
                type="text"
                className="px-3 py-2 w-60 placeholder-gray-400 text-black rounded-l-3xl outline-none focus:outline-none"
                placeholder="Try Codeforces or HackerEarth"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="flex items-center rounded-r-3xl bg-black justify-center px-4 border-r">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                </svg>
              </button>
            </div>
          </div>
          {/* <CustomDropdown /> */}
        </div>

        {/* <div className="bg-purple-400 p-5 text-left">
          {filterContests &&
            filterContests.map((contest: any, index: number) => (
              <div
                key={index}
                className="flex justify-start space-x-3 font-bold font-mono  bg-blue-300 p-3 m-3"
              >
                <h1>{contest.name}</h1>{" "}
                <a
                  href={contest.url}
                  target="_blank"
                  className="flex items-center hover:text-yellow-800"
                >
                  {contest.site} <FiExternalLink className="ml-1" />
                </a>
              </div>
            ))}
        </div> */}

        <div className="container">
          {/* <h2 className="heading">Contests </h2> */}
          <ul className="responsive-table bg-white p-5">
            <li className="table-header">
              <div className="col col-1 font-extrabold">Name</div>
              <div className="col col-2 font-extrabold ">Site</div>
              <div className="col col-3 font-extrabold ">Duration</div>
              <div className="col col-4 font-extrabold">Start Time</div>
            </li>

            {filterContests.length === 0 && (
              <p className="text-center">No Contests Found</p>
            )}
            {filterContests.map((contest: any, index: number) => (
              <li className="table-row font-semibold text-center " key={index}>
                <div className="col col-1" data-label="Name">
                  {contest.name}
                </div>
                <div className="col col-2" data-label="Site">
                  <a
                    href={contest.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center hover:text-yellow-800"
                  >
                    {contest.site} <FiExternalLink className="ml-1" />
                  </a>
                </div>{" "}
                <div className="col col-3" data-label="Duration">
                  { (contest.duration)/3600}hrs
                </div>
                <div className="col col-4" data-label="Start Time">
                  {contest.start_time}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contests;
