import { createContext, useContext, useEffect, useReducer } from "react";
// import { translateText } from "./helper/translator";
const initialState = { language: "en", translatedText: {} };
const languageReducer = (state, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    case "SET_TRANSLATED_TEXT":
      console.log("t1");
      return {
        ...state,
        translatedText: { ...state.translatedText, ...action.payload },
      };
    default:
      return state;
  }
};
const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(languageReducer, initialState);

  useEffect(() => {
    document.body.setAttribute("lang", state.language);
  }, [state.language]);

  //   const translate = async (text) => {
  //     const translated = await translateText(text, state.language);
  //     dispatch({ type: "SET_TRANSLATED_TEXT", payload: { [text]: translated } });
  //   };

  return (
    <LanguageContext.Provider value={{ state, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguageContext = () => {
  return useContext(LanguageContext);
};

export { useLanguageContext, LanguageProvider };
