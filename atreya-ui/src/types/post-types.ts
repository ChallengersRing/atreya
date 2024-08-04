
export enum QUERY_STATUS {
    SUCCESS = "success",
    ERROR = "error",
    PENDING = "pending"
}

export type PostItem = {
    id: string;
    title: string;
    summary: string;
    date: string;
    readingTime: string;
    imageUrl: string;
    url: string;
    author: {
        name: string;
        profileUrl: string;
        avatarUrl: string;
    };
};