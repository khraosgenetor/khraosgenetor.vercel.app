// pages/api/pages.ts
import { NextApiRequest, NextApiResponse } from 'next';

const pages = [
    { title: 'Home', url: '/', content: 'Welcome to the homepage.' },
    { title: 'About Me', url: '/about', content: 'Learn more about me.' },
    { title: 'GitHub Repos', url: '/github-repos', content: 'My GitHub repositories.' },
    { title: 'Khraotic Blog', url: '/khraotic-blog', content: 'Read my blog posts.' },
    { title: 'Khraotic Tutorials', url: '/khraotic-tutorials', content: 'Check out my tutorials.' },
    // { title: 'Wildcard Subpage', url: '/[...slug]', content: 'This is a wildcard route matching all subpages.' },
];


export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(pages);
};
