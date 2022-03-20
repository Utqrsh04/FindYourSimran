import Card from "../../Components/Card";
import Navbar from "../../Components/Navbar";
import Loader from "../../Components/Loader/Loader";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import Trends from "./Trends";
import ProfileCard from "../../Components/Profile/ProfileCard";
import NewsCard from "../../Components/News/NewsCard";
import ProfilePage from "./ProfilePage";
import EditProfile from "./EditProfile";
import Contests from "./Contests";
import Connections from "./Connections";
import axios from "axios";
import Toast from "../../Components/Toast/Toast";
import CreatePost from "../../Components/CreatePost/CreatePost";

const Dashboard = () => {
  const [posts, setPosts] = useState<any>();

  const [showToast, setShowToast] = useState(false);
  const [toastmessage, setToastmessage] = useState<string>("");
  const [toastFor, setToastFor] = useState<string>("");

  const [showCreatePost, setShowCreatePost] = useState(false);

  const fetchPosts = async () => {
    setShowToast(false);
    try {
      const user = JSON.parse(localStorage.getItem("userInfo")!);
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };

      const { data } = await axios.get(`/api/post`, config);

      setPosts(data.posts);
    } catch (error: any) {
      console.log("Error Ocuuered during Post Fetch");
      console.log(error.response);
    }
  };

  const deletePosts = async (s: string) => {
    setShowToast(false);
    if (window.confirm("Are you sure ?")) {
      try {
        const user = JSON.parse(localStorage.getItem("userInfo")!);
        const config = {
          headers: { Authorization: `Bearer ${user.token}` },
        };

        const { data } = await axios.delete(`/api/post/${s}`, config);
        console.log(data);
        setToastmessage(data.message);
      } catch (error: any) {
        console.log(error.response);
      }

      setShowToast(true);
      fetchPosts();
    }
  };

  useEffect(() => {
    <Loader />;
    fetchPosts();
  }, [showCreatePost]);

  return (
    <Switch>
      <>
        <Navbar />
        <Route exact path="/dashboard">
          <Toast type="Success" show={showToast} message={toastmessage} />
          <CreatePost
            show={showCreatePost}
            toggle={setShowCreatePost}
            setShowToast={setShowToast}
            setToastmessage={setToastmessage}
          />
          <div className=" flex bg-gray-500 flex-row pt-20 w-full justify-center px-2 lg:space-x-10 lg:px-0">
            {/* left profile portion */}
            <div className=" flex font-Sora bg-gray-500 flex-row6 w-full justify-center px-2 lg:space-x-10 lg:px-0">
              <div className="sticky top-20 w-1/6 rounded-md shadow-2xl max-h-96 hidden lg:block text-white">
                <ProfileCard />
              </div>
              {/* center post portion */}
              <div className="lg:w-2/5 rounded-md">
                {/* create post */}
                <div className="border-2 border-gray-200 bg-white rounded-lg mb-3 px-3">
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-evenly items-center">
                      <img
                        className="rounded-full w-14 h-14"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZkSEm6tkwEyPiz1kmz9BMlcBsbjl8q__XQ&usqp=CAU"
                        alt="User"
                      />

                      <button
                        className="text-white bg-gray-400 hover:bg-blue-300 font-medium rounded-full ml-5 mr-10 text-sm h-12 w-full"
                        type="button"
                        onClick={() => setShowCreatePost(true)}
                      >
                        Create a Post
                      </button>
                    </div>
                  </div>
                </div>

                {/* <MyModal */}

                {posts &&
                  posts.map((post: any, index: any) => (
                    <Card
                      key={index}
                      userName={post.postedBy.name}
                      datePosted={post.updatedAt}
                      img={post.postedBy.profilePic}
                      roles={post.roles}
                      desc={post.content}
                      deletePosts={deletePosts}
                      _id={post._id}
                    />
                  ))}
              </div>
              {/* right news portion */}
              <div className="top-20 w-1/5 shadow-2xl h-2/3 rounded-md hidden lg:block text-white mb-5">
                <NewsCard />
              </div>
            </div>
          </div>
        </Route>
        <Route exact path="/trends">
          <Trends />
        </Route>
        <Route exact path="/connections">
          <Connections />
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
