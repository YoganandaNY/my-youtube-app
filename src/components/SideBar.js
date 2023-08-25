import { useSelector } from "react-redux";
import {
  SideBarSectionOne,
  SideBarSectionTwo,
  SideBarSectionThree,
} from "../utils/config";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //if (!isMenuOpen) return null;

  return !isMenuOpen ? (
    <div className="w-max min-w-fit h-[92vh] overflow-auto p-2 font-sans shadow-md">
      <div className="border-b py-5">
        {SideBarSectionOne.map((item, i) => {
          return (
            <Link key={"id:" + i} to="/">
              <div
                className="flex justify-start flex-col items-center p-1 my-4 py-2 hover:bg-gray-200 rounded-md hover:cursor-pointer"
                key={item.menuId}
              >
                <img className="h-5" src={item.img} alt="" />
                <span className="text-xs py-2">{item.text}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="w-[15%] min-w-fit px-4 h-[93vh]  font-sans text-sm overflow-y-hidden hover:overflow-auto">
      <div className="border-b py-4">
        {SideBarSectionOne.map((item, i) => {
          return (
            <Link key={"id:" + i} to="/">
              <div
                className="flex justify-start items-center p-2 hover:bg-gray-200 rounded-md hover:cursor-pointer"
                key={item.menuId}
              >
                <img className="h-5" src={item.img} alt="" />
                <span className="pl-6">{item.text}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="border-b py-4">
        {SideBarSectionTwo.map((item) => {
          return (
            <div
              className="flex justify-start items-center p-2 hover:bg-gray-200 rounded-md hover:cursor-pointer"
              key={item.menuId}
            >
              <img className="h-5" src={item.img} alt="" />
              <span className="pl-6">{item.text}</span>
            </div>
          );
        })}
      </div>

      <div className="border-b py-4">
        <h2 className="py-2">Explore</h2>
        {SideBarSectionThree.map((item) => {
          return (
            <div
              className="flex justify-start items-center p-2 hover:bg-gray-200 rounded-md hover:cursor-pointer"
              key={item.menuId}
            >
              <img className="h-5" src={item.img} alt="" />
              <span className="pl-6">{item.text}</span>
            </div>
          );
        })}
      </div>
      <div className="py-4 text-xs">
        <h1 className="px-2 py-[2px]"> TermsPrivacy </h1>
        <h1 className="px-2 py-[2px]"> Policy & Safety </h1>
        <h1 className="px-2 py-[2px]"> About Press Copyright </h1>
      </div>
    </div>
  );
};

export default SideBar;
