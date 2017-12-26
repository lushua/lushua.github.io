export class Post {
    id: number;
    title: string;
    body: string;
    link: string;
}

export const POSTSDATA: Post[] = [
    {
        id: 0,
        title: 'Your Iphone is slow? ( ͡° ͜ʖ ͡°)',
        // tslint:disable-next-line:max-line-length
        body: 'TL;DR Apple slows down phones with low capacity batteries, replacing it makes them full speed again. Check Geekbench Scores.',
        link: 'https://pastebin.com/JergYngQ'
    }
];
