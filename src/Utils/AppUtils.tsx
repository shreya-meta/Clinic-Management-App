import { createContext } from "react";
export const AppContext = createContext<any>("");
//function to convert file into base 64
export const getBase64 = (file: any, cb: any) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    cb(reader.result);
  };
  reader.onerror = (error) => {
    console.log("Error: ", error);
  };
};
