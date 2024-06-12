import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)


  if ( ! isMenuOpen ) return null;
  return (
    <div className="leading-loose p-5 ">
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Shorts</li>
          <li>Subscriptions</li>
          <li>Youtube Music</li>
          <li>History</li>
        </ul>
      </div>
      <div className="mt-2 border-t-2 border-gray-200">
        <span className=" font-bold ">SUBSCRIPTIONS</span>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscriptions</li>
          <li>Youtube Music</li>
          <li>History</li>
        </ul>
      </div>
      <div className="mt-2 border-t-2 border-gray-200">
        <span className=" font-bold ">EXPLORE</span>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscriptions</li>
          <li>Youtube Music</li>
          <li>History</li>
        </ul>
      </div>
      <div className="mt-2 border-t-2 border-gray-200">
        <ul>
          <li>Settings</li>
          <li>Report History</li>
          <li>Help</li>
          <li>Send feedback</li>
          <li>History</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
