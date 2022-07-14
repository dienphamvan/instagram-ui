import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '~/firebase';

export const putLike = async (pid, uid, method = 'post') => {
    const postRef = doc(db, 'posts', pid);
    if (method === 'post') {
        updateDoc(postRef, {
            likes: arrayUnion(uid),
        });
    } else {
        updateDoc(postRef, {
            likes: arrayRemove(uid),
        });
    }
};
