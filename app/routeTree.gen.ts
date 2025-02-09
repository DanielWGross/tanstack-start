/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as MatchupMatchupIdImport } from './routes/matchup.$matchupId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const MatchupMatchupIdRoute = MatchupMatchupIdImport.update({
  id: '/matchup/$matchupId',
  path: '/matchup/$matchupId',
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
    '/matchup/$matchupId': {
      id: '/matchup/$matchupId'
      path: '/matchup/$matchupId'
      fullPath: '/matchup/$matchupId'
      preLoaderRoute: typeof MatchupMatchupIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/matchup/$matchupId': typeof MatchupMatchupIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/matchup/$matchupId': typeof MatchupMatchupIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/matchup/$matchupId': typeof MatchupMatchupIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/matchup/$matchupId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/matchup/$matchupId'
  id: '__root__' | '/' | '/matchup/$matchupId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  MatchupMatchupIdRoute: typeof MatchupMatchupIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  MatchupMatchupIdRoute: MatchupMatchupIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/matchup/$matchupId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/matchup/$matchupId": {
      "filePath": "matchup.$matchupId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
