import {configureStore} from "@reduxjs/toolkit";
import {productsApi} from "./service/dummydata.js";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
        reducer: {
            [productsApi.reducerPath]: productsApi.reducer
        },
        middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(productsApi.middleware)//in order to response to certain irregular queries (not found products), by adding an appealing page to convey the meaning of 404
    })
setupListeners(store.dispatch)