import React, {Suspense} from 'react'
import {createRoot} from 'react-dom/client'
import App from './app/'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {setupStore} from './shared/lib/store';

const store = setupStore();

const container: HTMLElement = document.getElementById("root")
createRoot(container).render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback="Loading...">
                {/*<ThemeProvider>*/}
                <Provider store={store}>
                    <App/>
                </Provider>
                {/*</ThemeProvider>*/}
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>
)
