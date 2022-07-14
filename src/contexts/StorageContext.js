import { ref, uploadBytesResumable } from 'firebase/storage';
import { createContext, useContext } from 'react';
import { storage } from '~/firebase';

const StorageContext = createContext();

export const useStorage = () => useContext(StorageContext);

export const StorageProvider = ({ children }) => {
    const upload = async (file, refFile) => {
        const storageRef = ref(storage, refFile);
        const uploadTask = await uploadBytesResumable(storageRef, file);
        return uploadTask;
    };

    const value = {
        upload,
    };
    return <StorageContext.Provider value={value}>{children}</StorageContext.Provider>;
};
