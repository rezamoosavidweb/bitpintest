// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// initialize an empty api service that we'll inject endpoints into later as needed
export const bitPinApi = createApi({
    reducerPath: 'bitPinApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.bitpin.ir/',
    }),
    endpoints: build => ({
        getMarket: build.query({
            query: () => `v1/mkt/markets/`,
            async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
                // create a websocket connection when the cache subscription starts
                const ws = new WebSocket('wss://ws.bitpin.ir/');

                const listenerOpenConnection = event => {
                    ws.send(JSON.stringify(arg));
                };
                try {
                    // wait for the initial query to resolve before proceeding
                    await cacheDataLoaded;

                    // when data is received from the socket connection to the server,
                    // update our query result with the received message
                    const listenerGetMessaging = event => {
                        console.log(event, 'event');

                        const data = JSON.parse(event.data);
                        updateCachedData(draft => {
                            draft.push(data);
                        });
                    };

                    ws.addEventListener('message', listenerGetMessaging);
                    ws.addEventListener('open', listenerOpenConnection);
                } catch {
                    // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
                    // in which case `cacheDataLoaded` will throw
                }
                // cacheEntryRemoved will resolve when the cache subscription is no longer active
                await cacheEntryRemoved;
                // perform cleanup steps once the `cacheEntryRemoved` promise resolves
                ws.close();
            },
        }),
    }),
});
export const { useGetMarketQuery } = bitPinApi;
