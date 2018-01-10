export class SectionData {
    id: number;
    href: string;
    title: string;
    desc: string;
}

export const SECTIONSDATA: SectionData[] = [
    // tslint:disable-next-line:max-line-length
    { id: 1, href: '/projects', title: 'Projects', desc: 'Place where you can find my all projects in various languages in many different technogies!'},
    { id: 2, href: '/roms', title: 'Roms', desc: 'Repository of my all Redmi Note 2 Roms ever created. Most of them are outated!'},
    { id: 3, href: '/about', title: 'About Me', desc: 'If you want to contat to me - its good place for ya!'}
  ];
