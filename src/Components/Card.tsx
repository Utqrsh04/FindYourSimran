import { FC } from "react";

interface CardTypeProps {
  img: any;
  userName: string;
  datePosted: string;
}

const Card: FC<CardTypeProps> = ({ img, userName, datePosted }) => {
  return (
    <div className=" pt-0-0 mx-auto top-0 relative pb-2">
      <div className=" w-full lg:max-w-full lg:flex mx-auto">
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              Best Mountain Trails 2020
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={img}
              alt="Avatar of Writer"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{userName}</p>
              <p className="text-gray-600">{datePosted}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
