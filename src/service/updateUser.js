import { updateDoc } from 'firebase/firestore';
import { userDocRef } from '~/firebase';

export const updateUser = async (uid, username = null, avatar = null) => {
    try {
        const updateData = {};
        if (avatar) updateData.avatar = avatar;
        if (username) updateData.username = username;
        await updateDoc(userDocRef(uid), updateData);
        return updateData;
    } catch (error) {
        return error;
    }
};
