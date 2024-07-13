import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [showSideBar, setShowSideBar] = useState(false);
    return (
        <GlobalContext.Provider value={{ showSideBar, setShowSideBar }}>
            {children}
        </GlobalContext.Provider>
    );
}

GlobalState.propTypes = {
    children: PropTypes.any.isRequired,
}
