export class Project {
    id: number;
    title: string;
    desc: string;
    motd: string;
    githref: string;
}

export const PROJECTSDATA: Project[] = [
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
    }
];
