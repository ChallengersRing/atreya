import { Navbar } from '@/components/navbar.tsx'
import { createRootRoute, Outlet, ScrollRestoration } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <Navbar />
            <ScrollRestoration />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})
