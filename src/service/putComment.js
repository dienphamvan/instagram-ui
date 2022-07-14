import { arrayUnion, doc, Timestamp, updateDoc } from 'firebase/firestore';
import { db } from '~/firebase';

export const putComments = (currentUserId, pid, commentContent, method = 'post') => {
    const postRef = doc(db, 'posts', pid);
    if (!commentContent.trim()) return;
    if (method === 'post') {
        updateDoc(postRef, {
            comments: arrayUnion({ uid: currentUserId, commentContent, createdAt: Timestamp.now() }),
        });
    } else {
        return;
    }
};
