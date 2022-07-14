import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '~/firebase';

export const postNewPost = async (pid, uid, postImage, postContent) => {
    try {
        await setDoc(doc(db, 'posts', pid), {
            uid,
            postImage,
            postContent,
            createdAt: serverTimestamp(),
            likes: [],
            comments: [],
        });
        return {
            pid,
            uid,
            postImage,
            postContent,
        };
    } catch (error) {
        console.log(error);
        return error;
    }
};
