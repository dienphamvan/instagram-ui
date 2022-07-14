import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const { userId } = useParams();

    useEffect(() => {}, [userId]);

    return <h1>User</h1>;
}

export default User;
