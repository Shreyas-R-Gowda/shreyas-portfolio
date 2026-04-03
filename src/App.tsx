import { lazy, Suspense } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <ErrorBoundary fallback={<div className="fatal-error">Critical graphics error. Please refresh.</div>}>
          <Suspense>
            <MainContainer>
              <Suspense>
                <CharacterModel />
              </Suspense>
            </MainContainer>
          </Suspense>
        </ErrorBoundary>
      </LoadingProvider>
    </>
  );
};

export default App;
