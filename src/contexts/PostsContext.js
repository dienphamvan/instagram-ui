import { onSnapshot, orderBy, query } from 'firebase/firestore';
import { collectionRef } from '~/firebase';
import { getUser } from '~/service/getUser';
import { useAuth } from './AuthContext';

const { createContext, useContext, useState, useEffect } = require('react');

const PostsContext = createContext();
export const usePosts = () => useContext(PostsContext);

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        if (!currentUser) return;
        const postsRef = collectionRef('posts');
        const postsQuery = query(postsRef, orderBy('createdAt', 'desc'));
        const unsub = onSnapshot(postsQuery, async (snapshot) => {
            // Not using loading animation to prevent re-render current user news when another user post a new post
            const data = [];
            for (let i = 0; i < snapshot.docs.length; i++) {
                const doc = snapshot.docs[i];
                let isLove = false;
                const docData = doc.data();
                if (!docData.createdAt) return;

                if (docData.likes.includes(currentUser.uid)) {
                    isLove = true;
                }

                const user = await getUser(docData.uid);
                data.push({
                    pid: doc.id,
                    uid: docData.uid,
                    currentUserId: currentUser.uid,
                    username: user.username,
                    avatar: user.avatar,
                    isLove,
                    ...docData,
                });
            }
            setPosts(data);
        });
        return unsub;
    }, [currentUser]);

    const value = {
        posts,
    };

    return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};
