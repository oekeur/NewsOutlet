export default interface Article {
    id: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;

    author?: string;
}
