export interface Card {
    code: string,
    image: URL,
    images: {
        svg: URL,
        png: URL
    },
    value: string,
    suite: string,
}