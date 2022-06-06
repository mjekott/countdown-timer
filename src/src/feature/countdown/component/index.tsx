import React from "react";

import { useCountdown } from "../hooks/useCountdown";
import ExpiredCard from "./ExpiredCard";
import ShowDetails from "./ShowDetails";

const CountdownTimer = () => {
  const {
    data: { days, hours, minutes, seconds },
    increment,
    isExpired,
  } = useCountdown();

  let content = isExpired ? (
    <ExpiredCard />
  ) : (
    <ShowDetails
      hours={hours}
      days={days}
      minutes={minutes}
      seconds={seconds}
    />
  );

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row space-x-4 items-center">
        {content}
        <button
          onClick={increment}
          className="px-3 py-1 text-sm text-white bg-orange-600 mt-5 md:ml-2 md:mt-0 rounded h-10"
        >
          Add More
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
