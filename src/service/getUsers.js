import { getDocs } from 'firebase/firestore';
import { collectionRef } from '~/firebase';

export const getUsers = async (query) => {
    try {
        const usersRef = collectionRef('users');
        const usersSnapshot = await getDocs(usersRef);
        const users = usersSnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return users.filter((user) => user.username.includes(query));
    } catch (error) {
        console.log(error);
        return error;
    }
};
