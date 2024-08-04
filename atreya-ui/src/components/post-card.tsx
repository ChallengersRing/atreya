import React from 'react';
import {PostItem} from "@/types/post-types.ts";
import {Link} from "@tanstack/react-router";

const PostCard: React.FC<PostItem> = ({
    id,
    title,
    summary,
    date,
    readingTime,
    imageUrl,
    author,
}) => {
    return (
        <div className="w-full md:w-1/3 px-3 mb-4">
            <Link
                to="/blog/$postId"
                params={{ postId: id }}
                className="block h-[172px] xs:h-[170px] bg-cover bg-gray-100 border border-gray-300"
                style={{
                    backgroundImage: `url("${imageUrl}")`,
                    backgroundPosition: 'center center',
                }}
                aria-label={title}
            >
                <span className="sr-only">{title}</span>
            </Link>
            <Link to="/blog/$postId" params={{ postId: id }} className="block mt-4">
                <h3 className="font-bold text-xl leading-tight mb-2">
                    {title}
                </h3>
                <div className="text-gray-700 text-base">
                    {summary}
                </div>
            </Link>
            <div className="flex items-center mt-5">
                <Link
                    className="flex-shrink-0"
                    to={author.profileUrl}
                >
                    <img
                        src={author.avatarUrl}
                        alt={`Profile of ${author.name}`}
                        className="rounded-full w-9 h-9 xs:w-8 xs:h-8"
                    />
                </Link>
                <div className="ml-3">
                    <Link
                        className="text-gray-900 hover:text-gray-700 font-semibold"
                        to={author.profileUrl}
                    >
                        {author.name}
                    </Link>
                    <div className="text-gray-600 text-sm mt-1">
                        <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
                        <span className="mx-2">•</span>
                        <span>{readingTime}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
