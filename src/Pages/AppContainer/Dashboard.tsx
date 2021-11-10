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
      <>
        <Navbar />
        <Route exact path="/dashboard">
          <div className=" flex bg-gray-500 flex-row pt-20 w-full justify-center px-2 lg:space-x-10 lg:px-0">
            {/* left profile portion */}
            <div className="sticky top-20 w-1/6 rounded-md shadow-2xl max-h-96 hidden lg:block text-white">
              <ProfileCard />
            </div>
            {/* center post portion */}
            <div className="lg:w-2/5 rounded-md">
              {/* create post */}
              <div className="border-2 border-gray-200 bg-white rounded-sm mb-3 px-3 pt-2">
                <div className="flex flex-col">
                  <div className="flex flex-row space-x-4 items-center">
                    <img
                      className="rounded-full w-14 h-14"
                      src={photo1}
                      alt="User"
                    />
                    <input
                      id="Post"
                      type="text"
                      className="outline-none border-2 w-96 rounded-full h-12 pl-3 bg-gray-300"
                      placeholder="Create a Post"
                    />
                    <button className="bg-gray-400 px-5 py-2 text-xl rounded-full">Post</button>
                  </div>

                  <div className="flex flex-row justify-around mt-2">
                    <div className="flex items-center">
                      <label className="flex flex-row px-1 py-1 items-center hover:bg-gray-400 rounded cursor-pointer" htmlFor="photo"><img className="w-10 h-8 mr-2" src="https://img.icons8.com/fluency/48/000000/image.png" alt="imageicon"/>Photo</label>
                      <input
                        id="photo"
                        placeholder=""
                        type="file"
                        className="hidden"
                      />
                    </div>

                    <div className="flex items-center">
                      <label className="flex flex-row px-1 py-1 items-center hover:bg-gray-400 rounded cursor-pointer" htmlFor="video"><img className="w-10 h-8 mr-2" src="https://img.icons8.com/fluency/48/000000/video.png" alt="videoicon"/>Video</label>
                      <input
                        id="video"
                        placeholder=""
                        type="file"
                        className="hidden"
                      />
                    </div>

                    <div className="flex items-center p-2">
                      <label className="flex flex-row px-1 py-1 items-center hover:bg-gray-400 rounded cursor-pointer" htmlFor="blog"><img className="w-10 h-8 mr-2" src="https://img.icons8.com/fluency/48/000000/image.png" alt="imageicon"/>Blog</label>
                      <input
                        id="blog"
                        placeholder=""
                        type="text"
                        className="hidden"
                      />
                    </div>
                    {/* <div className="flex items-baseline">
                      <img className="w-10 h-8" src="https://img.icons8.com/fluency/48/000000/image.png" alt="imageicon"/>
                      <InputField
                        label={true}
                        id="Photo"
                        placeholder="hello"
                        type="file"
                        className="hidden"
                      />
                    </div> */}
                  </div>
                </div>
              </div>

              {details.map((detail, index) => (
                <Card
                  key={index}
                  userName={detail.userName}
                  datePosted={detail.datePosted}
                  img={detail.img}
                />
              ))}
            </div>
            {/* right news portion */}
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
        <Route
          exact
          path={["/settings", "/settings/personal", "/settings/updatepassword"]}
        >
          <EditProfile />
        </Route>
      </>
    </Switch>
  );
};

export default Dashboard;
