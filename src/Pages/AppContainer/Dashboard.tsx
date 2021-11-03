import Card from "../../Components/Card";
import Navbar from "../../Components/Navbar";
import photo from "../../assets/darkbluebg.jpg";
import photo1 from "../../assets/neonwave.jpg";
import photo2 from "../../assets/images.jpg";
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
      img: photo,
      datePosted: "27 August",
    },
    {
      userName: "Utkarsh Kumar",
      img: photo1,
      datePosted: "18 June",
    },
    {
      userName: "Anurodh Dubey",
      img: photo,
      datePosted: "27 August",
    },
    {
      userName: "Utkarsh Kumar",
      img: photo1,
      datePosted: "18 June",
    },
    {
      userName: "Ashutosh Tripathi",
      img: photo2,
      datePosted: "15 October",
    },
    {
      userName: "Ashutosh Tripathi",
      img: photo2,
      datePosted: "15 October",
    },
    {
      userName: "Ashutosh Tripathi",
      img: photo2,
      datePosted: "15 October",
    },
    {
      userName: "Ashutosh Tripathi",
      img: photo2,
      datePosted: "15 October",
    },
    {
      userName: "Ashutosh Tripathi",
      img: photo2,
      datePosted: "15 October",
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
          <EditProfile/>
        </Route>
      </div>
    </Switch>
  );
};

export default Dashboard;