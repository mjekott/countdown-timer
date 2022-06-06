import { MS_HOURS, MS_MINUTES, MS_SECONDS } from "../constants/index";

export const getTimeLeft = (distance: number) => {
  const days = Math.floor(distance / MS_HOURS);
  const hours = Math.floor((distance % MS_HOURS) / MS_MINUTES);
  const minutes = Math.floor((distance % MS_MINUTES) / MS_SECONDS);
  const seconds = Math.floor((distance % MS_SECONDS) / 1000);

  return { days, hours, minutes, seconds };
};
