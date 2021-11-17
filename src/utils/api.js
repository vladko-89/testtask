import { BASE_API, KEY_API } from './constants';
import { getResponse } from './utils';

export const getCat = () => {
    return fetch(BASE_API, {
        headers: {
            'x-api-key': KEY_API
        }
    })
    .then(getResponse)
}
