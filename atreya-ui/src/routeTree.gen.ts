/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as SignupIndexImport } from './routes/signup/index'
import { Route as SigninIndexImport } from './routes/signin/index'
import { Route as BlogIndexImport } from './routes/blog/index'
import { Route as BlogPostIdImport } from './routes/blog/$postId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SignupIndexRoute = SignupIndexImport.update({
  path: '/signup/',
  getParentRoute: () => rootRoute,
} as any)

const SigninIndexRoute = SigninIndexImport.update({
  path: '/signin/',
  getParentRoute: () => rootRoute,
} as any)

const BlogIndexRoute = BlogIndexImport.update({
  path: '/blog/',
  getParentRoute: () => rootRoute,
} as any)

const BlogPostIdRoute = BlogPostIdImport.update({
  path: '/blog/$postId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/blog/$postId': {
      id: '/blog/$postId'
      path: '/blog/$postId'
      fullPath: '/blog/$postId'
      preLoaderRoute: typeof BlogPostIdImport
      parentRoute: typeof rootRoute
    }
    '/blog/': {
      id: '/blog/'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogIndexImport
      parentRoute: typeof rootRoute
    }
    '/signin/': {
      id: '/signin/'
      path: '/signin'
      fullPath: '/signin'
      preLoaderRoute: typeof SigninIndexImport
      parentRoute: typeof rootRoute
    }
    '/signup/': {
      id: '/signup/'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  BlogPostIdRoute,
  BlogIndexRoute,
  SigninIndexRoute,
  SignupIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/blog/$postId",
        "/blog/",
        "/signin/",
        "/signup/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/blog/$postId": {
      "filePath": "blog/$postId.tsx"
    },
    "/blog/": {
      "filePath": "blog/index.tsx"
    },
    "/signin/": {
      "filePath": "signin/index.tsx"
    },
    "/signup/": {
      "filePath": "signup/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
