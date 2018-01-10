export class Project {
    id: number;
    title: string;
    desc: string;
    motd: string;
    githref: string;
}

export const PROJECTSDATA: Project[] = [
    {
        id: -1,
        title: 'TheGuardian API Wrapper',
        motd: 'Give me some news, please',
        // tslint:disable-next-line:max-line-length
        desc: 'Easy, simple, fast wrapper for TheGuardian webpage and service. Gives simple models for robust workflow. It has official support!',
        githref: 'https://github.com/l7ssha/GuardianNet'
    },
    {
        id: 0,
        title: 'TagInserter',
        motd: 'VS Code? HTML? Np..',
        desc: 'VS Code extension for HTML that inserts html tag within selected text',
        githref: 'https://github.com/l7ssha/TagInserter'
    },
    {
        id: 1,
        title: 'SharpGitStat',
        motd: 'Fatching GitHubAPI status in easiest way. Powered by C# and JSON.NET',
        // tslint:disable-next-line:max-line-length
        desc: 'SharpGitStat is easiest way to get status and human messages from githubAPI status. All you had to do is create an api object and use 2 methods to fetch data!',
        githref: 'https://github.com/l7ssha/SharpGitStat'
    },
    {
        id: 2,
        title: 'ConfKr',
        motd: 'Opening and editing config files in simplest way. Powered by C#',
        // tslint:disable-next-line:max-line-length
        desc: 'ConfKr is simple config file manager. It opens config file, read and loads into memory for user. It can work on your favorite layout, and is compatibile with all data types!',
        githref: 'https://github.com/l7ssha/ConfKr'
    },
    {
        id: 3,
        title: 'Nataly',
        motd: 'Open source discord bot. Powered by Discord.NET',
        // tslint:disable-next-line:max-line-length
        desc: 'Nataly has rich  set of features: imagurAPI integration, google search, own permissions system, admistrative tools. Works on any operating system and is very fast!',
        githref: 'https://github.com/l7ssha/Nataly'
    },
    {
        id: 4,
        title: 'MCCLI',
        motd: 'Open source Command Line Interface',
        // tslint:disable-next-line:max-line-length
        desc: 'MCCLI means Muli-Component Command Line Interface. It has modular design - you can write clean modules with routes enabled. It has modding API for easy extenions building.',
        githref: 'https://github.com/l7ssha/MCCLI'
    },
    {
        id: 5,
        title: 'StrawpollNET',
        motd: 'Small thing to create and fetch polls from strawpoll.me',
        // tslint:disable-next-line:max-line-length
        desc: 'Smart way to integrate strawpoll into your app. This lib  has easy and rich set of features for interacting with strawwpoll API',
        githref: 'https://github.com/l7ssha/StrawPollNET'
    },
    {
        id: 6,
        title: 'lColors - C++ Console Colors library',
        // tslint:disable-next-line:max-line-length
        desc: 'lColors is my first C++ attempt. I\'ve written this library as my \"Hello World\" to C++. Time ago a introduced it to my github and do small changes. Feel free to fork.',
        motd: '',
        githref: 'https://github.com/lushua/lColors'
    },
    {
        id: 7,
        title: 'Game Engine - C++ 2D engine',
        // tslint:disable-next-line:max-line-length
        desc: 'It\'s a 2D "game engine", but I didn\'t created any game with it. It uses a OpenGL and SDL, also irrKlang as sound engine. In free time. I\'ll compile it and push to github. For now its somewhere in my computer',
        motd: '',
        githref: ''
    }
];
