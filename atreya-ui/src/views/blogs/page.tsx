import {useIntersection} from "@mantine/hooks"
import {QueryClient, QueryClientProvider, useInfiniteQuery} from "@tanstack/react-query"
import PostCard from "@/components/post-card.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {QUERY_STATUS} from "@/types/post-types.ts";
import {useEffect, useRef} from "react";
import TrendingPost from "@/views/blogs/trendingPost.tsx";

const queryClient = new QueryClient()

export default function BlogsPage() {
    return (
        <section className="mt-8 xs:mt-0 mb-4 max-w-[1032px] sm:px-5 mx-auto border-box overflow-auto">
            <QueryClientProvider client={queryClient}>
                <Separator orientation="horizontal" decorative={false}/>
                <span className="text-gray-900 font-medium text-lg leading-tight">
                    Trending
                </span>
                <TrendingPost/>
                <Separator orientation="horizontal" decorative={false}/>
                <span className="text-gray-900 font-medium text-lg leading-tight">
                    Latest
                </span>
                <div className="flex flex-wrap mt-8 mx-[-12px]">
                    <Page/>
                </div>
            </QueryClientProvider>
        </section>
    )
}

const posts = [
    {
        "id": "1",
        "title": "Understanding React Hooks",
        "summary": "An in-depth look at React Hooks, how they work, and why they are useful.",
        "date": "2024-07-15T12:34:56.000Z",
        "readingTime": "8 min read",
        "imageUrl": "https://via.placeholder.com/500x172.png?text=React+Hooks",
        "url": "https://example.com/understanding-react-hooks",
        "author": {
            "name": "Jane Doe",
            "profileUrl": "https://example.com/jane-doe",
            "avatarUrl": "https://via.placeholder.com/45x45.png?text=Jane"
        }
    },
    {
        "id": "2",
        "title": "The Future of JavaScript",
        "summary": "Exploring upcoming features and the future of JavaScript in web development.",
        "date": "2024-06-20T15:01:26.000Z",
        "readingTime": "10 min read",
        "imageUrl": "https://via.placeholder.com/500x172.png?text=JavaScript+Future",
        "url": "https://example.com/the-future-of-javascript",
        "author": {
            "name": "John Smith",
            "profileUrl": "https://example.com/john-smith",
            "avatarUrl": "https://via.placeholder.com/45x45.png?text=John"
        }
    },
    {
        "id": "3",
        "title": "Building Scalable APIs",
        "summary": "A guide to designing and building scalable APIs that handle high traffic.",
        "date": "2024-06-25T09:30:00.000Z",
        "readingTime": "12 min read",
        "imageUrl": "https://via.placeholder.com/500x172.png?text=Scalable+APIs",
        "url": "https://example.com/building-scalable-apis",
        "author": {
            "name": "Alice Johnson",
            "profileUrl": "https://example.com/alice-johnson",
            "avatarUrl": "https://via.placeholder.com/45x45.png?text=Alice"
        }
    },
    {
        "id": "4",
        "title": "Building Stttyyyyyyy",
        "summary": "A guide to designing and building scalable APIs that handle high traffic.",
        "date": "2024-06-25T09:30:00.000Z",
        "readingTime": "12 min read",
        "imageUrl": "https://via.placeholder.com/500x172.png?text=Scalable+APIs",
        "url": "https://example.com/building-scalable-apis",
        "author": {
            "name": "Alice Johnson",
            "profileUrl": "https://example.com/alice-johnson",
            "avatarUrl": "https://via.placeholder.com/45x45.png?text=Alice"
        }
    },
    {
        "id": "5",
        "title": "gg",
        "summary": "A guide to designing and building scalable APIs that handle high traffic.",
        "date": "2024-06-25T09:30:00.000Z",
        "readingTime": "12 min read",
        "imageUrl": "https://via.placeholder.com/500x172.png?text=Scalable+APIs",
        "url": "https://example.com/building-scalable-apis",
        "author": {
            "name": "Alice Johnson",
            "profileUrl": "https://example.com/alice-johnson",
            "avatarUrl": "https://via.placeholder.com/45x45.png?text=Alice"
        }
    },
    {
        "id": "6",
        "title": "Understanding React Hooks",
        "summary": "An in-depth look at React Hooks, how they work, and why they are useful.",
        "date": "2024-07-15T12:34:56.000Z",
        "readingTime": "8 min read",
        "imageUrl": "https://via.placeholder.com/500x172.png?text=React+Hooks",
        "url": "https://example.com/understanding-react-hooks",
        "author": {
            "name": "Jane Doe",
            "profileUrl": "https://example.com/jane-doe",
            "avatarUrl": "https://via.placeholder.com/45x45.png?text=Jane"
        }
    },
    {
        "id": "7",
        "title": "The Future of JavaScript",
        "summary": "Exploring upcoming features and the future of JavaScript in web development.",
        "date": "2024-06-20T15:01:26.000Z",
        "readingTime": "10 min read",
        "imageUrl": "https://via.placeholder.com/500x172.png?text=JavaScript+Future",
        "url": "https://example.com/the-future-of-javascript",
        "author": {
            "name": "John Smith",
            "profileUrl": "https://example.com/john-smith",
            "avatarUrl": "https://via.placeholder.com/45x45.png?text=John"
        }
    },
    {
        "id": "8",
        "title": "Building Scalable APIs",
        "summary": "A guide to designing and building scalable APIs that handle high traffic.",
        "date": "2024-06-25T09:30:00.000Z",
        "readingTime": "12 min read",
        "imageUrl": "https://via.placeholder.com/500x172.png?text=Scalable+APIs",
        "url": "https://example.com/building-scalable-apis",
        "author": {
            "name": "Alice Johnson",
            "profileUrl": "https://example.com/alice-johnson",
            "avatarUrl": "https://via.placeholder.com/45x45.png?text=Alice"
        }
    },
    {
        "id": "9",
        "title": "Building Stttyyyyyyy",
        "summary": "A guide to designing and building scalable APIs that handle high traffic.",
        "date": "2024-06-25T09:30:00.000Z",
        "readingTime": "12 min read",
        "imageUrl": "https://via.placeholder.com/500x172.png?text=Scalable+APIs",
        "url": "https://example.com/building-scalable-apis",
        "author": {
            "name": "Alice Johnson",
            "profileUrl": "https://example.com/alice-johnson",
            "avatarUrl": "https://via.placeholder.com/45x45.png?text=Alice"
        }
    },
    {
        "id": "10",
        "title": "gg",
        "summary": "A guide to designing and building scalable APIs that handle high traffic.",
        "date": "2024-06-25T09:30:00.000Z",
        "readingTime": "12 min read",
        "imageUrl": "https://via.placeholder.com/500x172.png?text=Scalable+APIs",
        "url": "https://example.com/building-scalable-apis",
        "author": {
            "name": "Alice Johnson",
            "profileUrl": "https://example.com/alice-johnson",
            "avatarUrl": "https://via.placeholder.com/45x45.png?text=Alice"
        }
    },
]
const fetchPost = async ({pageParam = 0}) => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const perPage = 3;
    const paginatedPosts = posts.slice(pageParam * perPage, (pageParam + 1) * perPage);
    const nextPage = paginatedPosts.length === perPage ? pageParam + 1 : undefined;
    return {posts: paginatedPosts, nextPage};
};

const Page = () => {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['posts'],
        queryFn: fetchPost,
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    })
    const lastElementRef = useRef<HTMLElement>(null);
    const {ref, entry} = useIntersection({
        root: lastElementRef.current,
        threshold: 1
    })
    useEffect(() => {
        if (entry?.isIntersecting) fetchNextPage()
    }, [entry]);

    if (status === QUERY_STATUS.PENDING) return <p>Loading...</p>;
    if (status === QUERY_STATUS.ERROR) return <p>Error: {error.message}</p>;

    return (
        <>
            {data.pages.map((page) => (
                page.posts.map((post, i) => {
                    if (page.posts.length - 1 === i)
                        return <>
                            <span ref={ref} key={post.id}></span>
                            <PostCard key={post.id} {...post} />
                        </>;
                    return <PostCard key={post.id} {...post} />
                })
            ))}
            <div>
                <button className="float-right"
                        onClick={() => fetchNextPage()}
                        disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
                </button>
            </div>
            <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
    );
};
