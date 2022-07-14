import { getDoc } from 'firebase/firestore';
import { userDocRef } from '~/firebase';

export const getUser = async (uid) => {
    try {
        const userRef = userDocRef(uid);
        const userSnap = await getDoc(userRef);
        return { id: userSnap.id, ...userSnap.data() };
    } catch (error) {
        console.log(error);
        return error;
    }
};
