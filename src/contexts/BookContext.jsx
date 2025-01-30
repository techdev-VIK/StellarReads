import { createContext, useContext } from "react";


const BookContext = createContext();

const useBookContext = () => useContext(BookContext);


export default useBookContext;
