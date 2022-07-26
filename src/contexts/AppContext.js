const { createContext, useContext, useState } = require('react');

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [isShowSwapModal, setIsShowSwapModal] = useState(false);

    const value = {
        isShowSwapModal,
        setIsShowSwapModal,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
