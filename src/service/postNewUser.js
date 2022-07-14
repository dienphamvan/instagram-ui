import { doc, setDoc } from 'firebase/firestore';
import { collectionRef } from '~/firebase';

export const postNewUser = async (uid, username, avatar) => {
    try {
        const userRef = collectionRef('users');
        await setDoc(doc(userRef, uid), {
            username,
            avatar,
        });
        return {
            uid,
            username,
            avatar,
        };
    } catch (error) {
        return error;
    }
};
