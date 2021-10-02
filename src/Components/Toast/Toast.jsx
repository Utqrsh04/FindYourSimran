import React, { useState } from "react";

const Toast = (props) => {
    
  const [show, setShow] = useState(props.Show);

  
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      {show === true && (
        <div className="bg-white rounded-lg inline-flex fixed top-5 z-50">
          <div
            className={` w-64 border-t-8 rounded-lg flex h-20   ${
              props.success == true ? " border-green-400 " : " border-red-600 "
            } `}
          >
            {props.success && (
              <>
                <div className="w-1/3 pt-6 flex justify-center ">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                </div>
                <div className="w-full flex  items-center  ">
                  <h3 className="font-bold text-black">{props.message}</h3>
                </div>
              </>
            )}
            {props.success == false && (
              <>
                <div className="w-1/3 pt-6 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
                  </svg>
                </div>
                <div className="w-full flex  items-center ">
                  <h3 className="font-bold text-black">{props.message}</h3>
                </div>
              </>
            )}
            <div className="pr-2 pt-2 ml-5 " onClick={handleClose}>
              <svg
                className=""
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z" />
              </svg>
            </div>
          </div>

         
        </div>
      )}
    </>
  );
};

export default Toast;
