import { routes } from '~/config';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Home from '~/pages/Home';
import User from '~/pages/User';
import Inbox from '~/pages/Inbox';
import Explore from '~/pages/Explore';
import Story from '~/pages/Story';
import SetupAccount from '~/pages/SetupAccount';

export const publicRoutes = [
    { path: routes.login, page: Login },
    { path: routes.signup, page: Signup },
];

export const privateRoutes = [
    { path: routes.setup, page: SetupAccount, headLess: true },
    { path: routes.home, page: Home },
    { path: routes.user, page: User },
    { path: routes.inbox, page: Inbox },
    { path: routes.explore, page: Explore },
    { path: routes.story, page: Story, headLess: true },
];
