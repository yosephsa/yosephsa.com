export interface StoryLink {
    linkType: LinkType;
    link: string;
}

export enum LinkType {
    YOUTUBE,
    GITHUB,
    MEDIUM
}