import Button from "./Button";
import { useState, useRef } from "react";
import { buttonList } from "../utils/config";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const ButtonList = () => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <div className="w-[1300px] items-center flex justify-center">
      {scrollX !== 0 && (
        <button
          className="prev h-[35px] w-[35px] items-center text-center hover:rounded-full p-2 m-2 hover:bg-gray-200 hover:cursor-pointer"
          onClick={() => slide(-50)}
        >
          <SlArrowLeft className="" />
        </button>
      )}
      <ul
        ref={scrl}
        onScroll={scrollCheck}
        className="flex max-w-full overflow-hidden scroll-smooth items-center my-2 whitespace-nowrap"
      >
        {buttonList.map((item, idx) => (
          <li key={idx}>
            <Button key={idx} name={item} />
          </li>
        ))}
      </ul>
      {!scrolEnd && (
        <button
          className="next h-[35px] w-[35px] hover:rounded-full p-2 m-2 hover:bg-gray-200 hover:cursor-pointer"
          onClick={() => slide(+50)}
        >
          <SlArrowRight className="text-center" />
        </button>
      )}
    </div>
  );
};

export default ButtonList;
