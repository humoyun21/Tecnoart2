import Cookies from "js-cookie";

export const saveAbout = (count: string) => {
  Cookies.set("aboutus", count);
};
export const getAbout = () => {
  return Cookies.get("aboutus");
};