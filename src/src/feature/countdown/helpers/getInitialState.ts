import { AppStorage } from "./../../../services/AppLocalStorage";
import { LOCAL_STORAGE_TARGET_DATE } from "../constants/index";

/**
 *
 * @returns future date
 */
export const getInitialState = () => {
  const date = AppStorage.get(LOCAL_STORAGE_TARGET_DATE);
  if (!date) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + 1);
    AppStorage.set(LOCAL_STORAGE_TARGET_DATE, newDate);
    return newDate;
  }
  return date;
};
