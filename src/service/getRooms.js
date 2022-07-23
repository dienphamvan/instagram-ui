import { getDocs, query, where } from 'firebase/firestore';
import { collectionRef } from '~/firebase';

export const getRooms = async (uid) => {
    const roomsRef = collectionRef('rooms');
    const roomsQuery = query(roomsRef, where('uids', 'array-contains', uid));
    const roomsSnapshot = await getDocs(roomsQuery);
    return roomsSnapshot.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data(),
        };
    });
};
