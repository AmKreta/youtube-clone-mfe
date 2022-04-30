import React, { lazy, Suspense } from 'react';

const AuthLazy = lazy(() => import('./components/auth'));
const CommentsLazy = lazy(() => import('./components/comments'));
const PlayerLazy = lazy(() => import('./components/player'));
const RecommendationLazy = lazy(() => import('./components/recommendation'));
const SearchLazy = lazy(() => import('./components/search'));

const App = function () {
    return (<>
        <Suspense>
            <AuthLazy />
        </Suspense>
        <Suspense>
            <CommentsLazy />
        </Suspense>
        <Suspense>
            <PlayerLazy />
        </Suspense>
        <Suspense>
            <RecommendationLazy />
        </Suspense>
        <Suspense>
            <SearchLazy />
        </Suspense>
        <div>Container</div>
    </>);
}

export default App;