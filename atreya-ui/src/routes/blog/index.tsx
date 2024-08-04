import {createFileRoute} from '@tanstack/react-router'
import BlogsPage from "@/views/blogs/page.tsx";

export const Route = createFileRoute('/blog/')({
    component: () => < BlogsPage/>
})