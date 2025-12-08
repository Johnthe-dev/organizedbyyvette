interface ITitle {
    className?: string,
    content: string,
    type: string
}
export interface IContentSection {
    title?: ITitle,
    subSections?: {
        title?: ITitle
        content?: string,
        list?: string[],
        className?: string
    }[],
    className?: string,
    hasContactButtons?: boolean,
    hasHeroImage?: boolean,
}