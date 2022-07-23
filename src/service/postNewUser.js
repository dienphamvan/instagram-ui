import { doc, setDoc } from 'firebase/firestore';
import { collectionRef } from '~/firebase';

export const generateKeywords = (username) => {
    const arrayWords = username.split('');
    const keywords = [];
    for (let i = 0; i < arrayWords.length; i++) {
        for (let j = i; j < arrayWords.length; j++) {
            keywords.push(username.slice(i, j + 1));
        }
    }
    return keywords;
};

export const postNewUser = async (uid, username, avatar) => {
    try {
        const userRef = collectionRef('users');
        await setDoc(doc(userRef, uid), {
            username,
            avatar,
            keywords: generateKeywords(username),
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
