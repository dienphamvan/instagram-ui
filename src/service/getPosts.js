import { getDocs, orderBy, query } from 'firebase/firestore';
import { collectionRef } from '~/firebase';

export const getPosts = async () => {
    try {
        const postsRef = collectionRef('posts');
        const postsQuery = query(postsRef, orderBy('createdAt', 'desc'));
        const postsSnapshot = await getDocs(postsQuery);
        const data = postsSnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};
