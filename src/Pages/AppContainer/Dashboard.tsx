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

const DashBoard = () => {
  const [posts, setPosts] = useState<any>();

  const [content, setContent] = useState("");
  // const [image, setImage] = useState("");
  const [roles, setRoles] = useState<string>("");

  const [showToast, setShowToast] = useState(false);
  const [toastmessage, setToastmessage] = useState<string>("");
  const [toastFor, setToastFor] = useState<"Error" | "Success">("Success");
  const [showCreatePost, setShowCreatePost] = useState(false);

  const createPosts = async (e: any) => {
    setShowToast(false);
    let role = roles.trim().split(",");
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("userInfo")!);

      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };

      const { data } = await axios.post(
        `/api/post/create`,
        { content, roles: role },
        config
      );

      setToastmessage(data.message);
    } catch (error: any) {
      // console.log("Error Ocuuered during Post Create");
      console.log(error.response);
    }
    setShowToast(true);
    fetchPosts();
  };

  const fetchPosts = async () => {
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
        setToastFor("Success");
      } catch (error: any) {
        setToastmessage(error.response.data.message);
        setToastFor("Error");
        console.log(error.response);
      }
      setShowToast(true);
      fetchPosts();
    }
  };

  useEffect(() => {
    <Loader />;
    fetchPosts();
  }, []);

  return (
    <Switch>
      <>
        <Navbar />
        <Route exact path="/dashboard">
          <Toast type={toastFor} show={showToast} message={toastmessage} />
          <CreatePost
            show={showCreatePost}
            toggle={setShowCreatePost}
            setShowToast={setShowToast}
            setToastmessage={setToastmessage}
            setToastFor={setToastFor}
          />
          <div className=" flex bg-bodyColr h-screen flex-row pt-20 w-full justify-center px-2 lg:px-0">
            {/* left profile portion */}
            <div className=" flex font-Sora bg-bodyColr flex-row6 w-full justify-evenly sm:space-x-10 lg:justify-center px-2 lg:space-x-5 lg:px-0">
              <div className="sticky top-20 lg:w-1/6 rounded-md shadow-2xl max-h-96 hidden lg:block text-white">
                <ProfileCard />
              </div>
              {/* center post portion */}
              <div className="lg:w-2/5 w-2/4 rounded-md">
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
                        data-modal-toggle="authentication-modal"
                      >
                        Create a Post
                      </button>

                      <div
                        id="authentication-modal"
                        aria-hidden="true"
                        className="hidden overflow-y-auto overflow-x-hidden bg-opacity-50 bg-black fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
                      >
                        <div className="relative px-4 w-full max-w-lg h-full md:h-auto">
                          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 opacity-100">
                            <div className="flex justify-end p-2">
                              <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                data-modal-toggle="authentication-modal"
                              >
                                Close
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                            <form
                              className="px-6 pb-4 space-y-3 lg:px-8 sm:pb-6 xl:pb-8"
                              action="#"
                            >
                              <h3 className="text-xl -mt-8 font-medium text-gray-900">
                                Create a Post
                              </h3>
                              <hr className="-top-2" />
                              <div className="pt-2 flex items-center">
                                <img
                                  className="rounded-full w-14 h-14"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZkSEm6tkwEyPiz1kmz9BMlcBsbjl8q__XQ&usqp=CAU"
                                  alt="User"
                                />
                                <div>
                                  <p>User Name</p>
                                  <p className="text-sm">Role</p>
                                </div>
                              </div>
                              <div>
                                <textarea
                                  className="resize-none text-sm w-full h-40 rounded border-2 p-1"
                                  placeholder="What do you want to post about?"
                                  name=""
                                  id=""
                                  value={content}
                                  onChange={(e) => setContent(e.target.value)}
                                />
                              </div>
                              <div className="flex">
                                <textarea
                                  placeholder="roles"
                                  className="w-full h-10 text-sm resize-none overflow-hidden rounded border-2 p-1"
                                  name="roles"
                                  id="roles"
                                  value={roles}
                                  onChange={(e) => setRoles(e.target.value)}
                                />
                              </div>
                              <div className="flex justify-between">
                                <label htmlFor="images">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    width="35px"
                                    height="35px"
                                  >
                                    <path
                                      fill="#50e6ff"
                                      d="M40,6H8C6.895,6,6,6.895,6,8v30c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"
                                    />
                                    <linearGradient
                                      id="YuumOLjCrULofRDNXgQAXa"
                                      x1="18"
                                      x2="42"
                                      y1="32.093"
                                      y2="32.093"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop offset="0" stopColor="#3ccbf4" />
                                      <stop offset="1" stopColor="#1fa0e5" />
                                    </linearGradient>
                                    <path
                                      fill="url(#YuumOLjCrULofRDNXgQAXa)"
                                      d="M32.065,23.065c-1.149-1.149-3.005-1.174-4.185-0.057L18,32.368V42h22c1.105,0,2-0.895,2-2 v-7L32.065,23.065z"
                                    />
                                    <circle
                                      cx="30.5"
                                      cy="14.5"
                                      r="3.5"
                                      fill="#fff8de"
                                    />
                                    <linearGradient
                                      id="YuumOLjCrULofRDNXgQAXb"
                                      x1="23.91"
                                      x2="23.91"
                                      y1="18.186"
                                      y2="42"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop offset="0" stopColor="#28afea" />
                                      <stop offset="1" stopColor="#0b88da" />
                                    </linearGradient>
                                    <path
                                      fill="url(#YuumOLjCrULofRDNXgQAXb)"
                                      d="M8,42h32c0.811,0,1.507-0.485,1.82-1.18L20.065,19.065c-1.149-1.149-3.005-1.174-4.185-0.057 L6,28.368V40C6,41.105,6.895,42,8,42z"
                                    />
                                  </svg>
                                </label>
                                <input
                                  className="hidden"
                                  id="images"
                                  type="file"
                                />
                                <button
                                  onClick={(e) => createPosts(e)}
                                  className="bg-gray-400 hover:bg-brightBlue px-3 py-1 rounded-full"
                                >
                                  Post
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
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
              <div className="sticky top-20 w-1/3 lg:w-1/5 shadow-2xl rounded-md hidden md:block text-white mb-5 h-0">
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

export default DashBoard;
