import React from "react";
import { Posts } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import AuthorPage from "./AuthorPage";
import { AiOutlineMenu } from "react-icons/ai";

const DashBoardPage = () => {
  const { posts } = useSelector((store: RootState) => store.post);

  return (
  <div className="w-screen bg-gray-50 px-5 space-y-5">
      <div className="w-full flex justify-end p-2">
        <h3 className="text-3xl leading-10">Shubham Agarwal</h3>
      </div>

      <div className="flex justify-center space-x-5">
        <div className="w-2/5 h-full hidden sm:flex flex-col items-center justify-center">
          <h3 className=" p-2 text-2xl rounded py-4 text-white bg-blue-800 text-center w-full">
            DashBoard
          </h3>

          <div className="flex flex-col text-lg space-y-3 mt-5 w-full px-5">
            <button className="w-full shadow-md rounded p-3 bg-blue-50 duration-300 hover:bg-slate-600 hover:text-white">About</button>
            <button className="w-full shadow-md rounded p-3 bg-blue-50 duration-300 hover:bg-slate-600 hover:text-white">Posts</button>
            <button></button>
          </div>
        </div>
        <div className="w-4/5 sm:w-full h-full ">
          <AuthorPage />
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
