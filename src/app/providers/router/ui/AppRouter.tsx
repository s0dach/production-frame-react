import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from 'shared/config/routeConfig/routeConfig';
import {PageLoader} from "widgets/PageLoader/ui/PageLoader";

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({element, path}) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<div><PageLoader/></div>}>
                        <div className="page">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);

export default AppRouter;
