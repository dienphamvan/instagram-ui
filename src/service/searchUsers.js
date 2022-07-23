import { getDocs, orderBy, where, query } from 'firebase/firestore';
import { collectionRef } from '~/firebase';

export const searchUsers = async (q) => {
    try {
        const usersRef = collectionRef('users');
        const usersQuery = query(usersRef, where('keywords', 'array-contains', q), orderBy('username'));
        const usersSnapshot = await getDocs(usersQuery);
        const users = usersSnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return users;
    } catch (error) {
        console.log(error);
        return error;
    }
};
