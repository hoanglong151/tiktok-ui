import Home from '~/pages/Home';
import Upload from '~/pages/Upload';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';

import { OnlyHeader } from '~/components/Layouts';

const publicRoutes = [
    { path: '/', components: Home },
    { path: '/following', components: Following },
    { path: '/upload', components: Upload, layout: null },
    { path: '/profile', components: Profile, layout: OnlyHeader },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
