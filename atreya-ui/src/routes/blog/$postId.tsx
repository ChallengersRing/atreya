import {createFileRoute} from '@tanstack/react-router'
import PostDetail from "@/components/post-detail.tsx";

export const Route = createFileRoute('/blog/$postId')({
    component: () => < PostDetail />
})