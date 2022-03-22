import { FC, Fragment, InputHTMLAttributes, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

interface CreatePostPropType extends InputHTMLAttributes<HTMLInputElement> {
  show: boolean;
  toggle: any;
  setShowToast: any;
  setToastmessage: any;
  setToastFor: any;
}

const CreatePost: FC<CreatePostPropType> = ({
  show,
  toggle,
  setShowToast,
  setToastmessage,
  setToastFor,
}) => {
  const [open, setOpen] = useState(show);
  const [content, setContent] = useState("");
  // const [image, setImage] = useState("");
  const [roles, setRoles] = useState<string>("");

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
      setToastFor("Success");
      setRoles("");
      setContent("");
      // handleClick();
    } catch (error: any) {
      console.log("Error Ocuuered during Post Create");
      setToastmessage(error.response.data.message);
      setToastFor("Error");
      console.log(error.response);
    }
    setShowToast(true);
  };

  useEffect(() => {
    setOpen(show);
  }, [show]);

  const handleClick = () => {
    setOpen(false);
    toggle(false);
    // history.push("/");
  };

  return (
    <Transition.Root show={open}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        onClose={() => {}}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all mr-5 sm:mx-0 sm:my-8 sm:align-middle max-w-lg w-full">
              <div className="bg-white  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex flex-col  sm:items-start w-full">
                  <Dialog.Title
                    as="h3"
                    className="text-lg flex items-center leading-6 font-medium text-red-800"
                  >
                    {/* <img src={Warning} alt="" className="w-10 h-10" /> */}
                    Create a post
                  </Dialog.Title>

                  <div className="mt-2 w-full">
                    <form
                      className="px-6 pb-4 space-y-3 w-full bg-gray-200 "
                      action="#"
                    >
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
                        <input className="hidden" id="images" type="file" />
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
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-2 w-full inline-flex justify-center rounded-md border border-black shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleClick}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CreatePost;

// <div
//   id="authentication-modal"
//   aria-hidden="true"
//   className="hidden overflow-y-auto overflow-x-hidden bg-opacity-50 bg-black fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
// >
//   <div className="relative px-4 w-full max-w-lg h-full md:h-auto">
//     <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 opacity-100">
//       <div className="flex justify-end p-2">
//         <button
//           type="button"
//           className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
//           data-modal-toggle="authentication-modal"
//         >
//           Close
//           <svg
//             className="w-5 h-5"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             ></path>
//           </svg>
//         </button>
//       </div>
//     </div>
//   </div>
// </div>;
