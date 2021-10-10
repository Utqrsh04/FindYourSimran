import Card from "../../Components/Card";
import Navbar from "../../Components/Navbar";
import photo from "../../assets/darkbluebg.jpg";
import photo1 from "../../assets/neonwave.jpg";
import photo2 from "../../assets/images.jpg";
import Loader from "../../Components/Loader/Loader";
import { useEffect } from "react";
import { Switch, Route } from "react-router";
import Trends from "./Trends";

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
<<<<<<< HEAD

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="flex flex-row mt-16 pt-5 w-full justify-center px-2 lg:space-x-10 lg:px-0">
        <div className="bg-white w-1/6 rounded-lg shadow-2xl max-h-96 hidden lg:block">
          <ProfileCard />
        </div>
        <div className="lg:w-2/5 rounded-md ">
          {details.map((detail, index) => (
            <Card
              key={index}
              userName={detail.userName}
              datePosted={detail.datePosted}
              img={detail.img}
            />
          ))}
        </div>
        <div className="w-1/5 shadow-2xl rounded-lg h-100 border-2 border-gray-200 hidden xl:block">
          <NewsCard />
        </div>
      </div>
    </div>
=======
  return (
    <Switch>
      <div className="">
        <Navbar />
        <Route exact path="/dashboard">
          <div className=" flex flex-row mt-20 w-full justify-center px-2 lg:space-x-10 lg:px-0">
            <div className="w-1/6 border-black border-2 rounded-md shadow-2xl h-64 hidden lg:block ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, doloremque Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quaerat rerum doloremque dolore. Vero quam
                fugiat aliquam aperiam animi unde alias ipsa veritatis, labore,
                dolorem possimus voluptatum ea explicabo exercitationem modi!
              </p>
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
            <div className="w-1/6 border-black border-2 rounded-md h-64 hidden lg:block">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, doloremque Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quaerat rerum doloremque dolore. Vero quam
                fugiat aliquam aperiam animi unde alias ipsa veritatis, labore,
                dolorem possimus voluptatum ea explicabo exercitationem modi!
              </p>
            </div>
          </div>
        </Route>
        <Route exact path="/trends">
          <Trends />
        </Route>
      </div>
    </Switch>
>>>>>>> main
  );
};

export default Dashboard;
