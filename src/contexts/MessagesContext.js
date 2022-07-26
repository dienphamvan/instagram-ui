import { useEffect } from 'react';
import { getRooms } from '~/service/getRooms';
import { getUser } from '~/service/getUser';
import { useAuth } from './AuthContext';

const { createContext, useContext, useState } = require('react');

const MessagesContext = createContext();
export const useMessages = () => useContext(MessagesContext);

export const MessagesProvider = ({ children }) => {
    const [rooms, setRooms] = useState([]);
    const [messages, setMessages] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            const roomsUid = await getRooms(currentUser.uid);

            for (let i = 0; i < roomsUid.length; i++) {
                const data = {};
                const roomUid = roomsUid[i];
                data.rid = roomUid.id;
                const uid = roomUid.uids.find((uid) => uid !== currentUser.uid);
                const user = await getUser(uid);
                data.user = { ...user };

                // Get all messages

                data.lastMessage = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
                setRooms((prev) => {
                    // Check if room already in the rooms state
                    for (const val of prev) {
                        if (val.rid === data.rid) return prev;
                    }
                    return prev.concat([data]);
                });
            }
        };
        fetchData();
    }, [currentUser]);

    const value = {
        rooms,
    };

    return <MessagesContext.Provider value={value}>{children}</MessagesContext.Provider>;
};
