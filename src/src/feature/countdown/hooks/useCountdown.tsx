import React, { useEffect, useState } from "react";
import { AppStorage } from "../../../services/AppLocalStorage";
import { LOCAL_STORAGE_TARGET_DATE } from "../constants";
import { getInitialState } from "../helpers/getInitialState";

import { getTimeLeft } from "../helpers/getTimeLeft";

/***
 * @returns  {object} containing data,increment and isExpired
 */
export const useCountdown = () => {
  const [targetDate, setTargetDate] = useState(() => getInitialState());
  const distance = () => new Date(targetDate).getTime() - new Date().getTime();

  const [countDown, setCountDown] = useState(distance());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(distance());
    }, 1000);
    return () => clearInterval(interval);
  }, [countDown]);

  const increment = () => {
    const newTarget = new Date(targetDate);
    newTarget.setDate(newTarget.getDate() + 1);
    AppStorage.set(LOCAL_STORAGE_TARGET_DATE, newTarget);
    setTargetDate(newTarget);
  };

  const isExpired = distance() <= 0;

  const data = getTimeLeft(countDown);

  return { data, increment, isExpired };
};
