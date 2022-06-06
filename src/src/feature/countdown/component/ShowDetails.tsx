import React, { FC } from "react";

type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ShowDetails: FC<Props> = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="p-1">
      <p className="flex flex-col md:flex-row gap-3 md:gap-5 items-center justify-center text-orange-600">
        <span className="font-bold text-black"> You have</span>
        <span className="flex flex-col items-center ">
          <span>{days}</span> Days
        </span>
        <span>:</span>
        <span className="flex flex-col items-center justify-center ">
          <span>{hours}</span> hours
        </span>
        <span>:</span>
        <span className="flex flex-col items-center ">
          <span>{minutes}</span> Minutes
        </span>
        <span>:</span>
        <span className="flex flex-col items-center ">
          <span>{seconds}</span> Seconds
        </span>
        <span className="md:ml-2 font-bold text-black"> to go!!</span>
      </p>
    </div>
  );
};

export default ShowDetails;
