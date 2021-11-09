import Card from "../../Components/Card";
import Navbar from "../../Components/Navbar";
import Loader from "../../Components/Loader/Loader";
import { useEffect } from "react";
import { Switch, Route } from "react-router";
import Trends from "./Trends";
import ProfileCard from "../../Components/Profile/ProfileCard";
import NewsCard from "../../Components/News/NewsCard";
import ProfilePage from "./ProfilePage";
import EditProfile from "./EditProfile";
import Contests from "./Contests";

const Dashboard = () => {
  const details = [
    {
      userName: "Anurodh Dubey",
      img: "https://avatars.githubusercontent.com/u/61279576?v=4",
      datePosted: "5 November",
      role: ["Frontend Developer", "Reactjs Developer"],
      desc: "I need a UI-UX designed for my upcoming project who can make good looking UI.",
    },
    {
      userName: "Utkarsh",
      img: "https://avatars.githubusercontent.com/u/55407062?v=4",
      datePosted: "1 November",
      role: ["UI-UX Designer"],
      desc: "I need a UI-UX designed for my upcoming project who can make good looking UI.",
    },
    {
      userName: "Rahul",
      img: "https://avatars.githubusercontent.com/u/26406279?v=4",
      datePosted: "30 October",
      role: ["Android Developer"],
      desc: "I need a Android developer for my project who can help me in making native android apps.",
    },
    {
      userName: "Ashutosh",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZkSEm6tkwEyPiz1kmz9BMlcBsbjl8q__XQ&usqp=CAU",
      datePosted: "25 October",
      role: ["Backend Developer "],
      desc: "I need a Backend Developer for my current project who can make and manage databases and create endpoints for the frontend .",
    },
  ];

  useEffect(() => {
    <Loader />;
  }, []);
  return (
    <Switch>
      <div className="">
        <Navbar />
        <Route exact path="/dashboard">
          <div className=" flex bg-gray-500 flex-row pt-20 w-full justify-center px-2 lg:space-x-10 lg:px-0">
            <div className="sticky top-20 w-1/6 rounded-md shadow-2xl max-h-96 hidden lg:block text-white">
              <ProfileCard />
            </div>
            <div className="lg:w-2/5 rounded-md">
              {details.map((detail, index) => (
                <Card
                  key={index}
                  userName={detail.userName}
                  datePosted={detail.datePosted}
                  img={detail.img}
                  roles={detail.role}
                  desc={detail.desc}
                />
              ))}
            </div>
            <div className="sticky top-20 w-1/5 shadow-2xl h-2/3 rounded-md hidden lg:block text-white">
              <NewsCard />
            </div>
          </div>
        </Route>
        <Route exact path="/trends">
          <Trends />
        </Route>
        <Route exact path="/contests">
          <Contests />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/settings">
          <EditProfile />
        </Route>
        {/* <Route exact path="/octoProfile"> */}
        {/* <OctoProfile/> */}
        {/* </Route> */}
      </div>
    </Switch>
  );
};

export default Dashboard;
