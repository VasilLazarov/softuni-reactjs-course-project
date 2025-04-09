
const requester = async (method, url, data, options = {}) => {
    if(method !== "GET"){
        options.method = method;
    }

    if(data) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: JSON.stringify(data),
        };
    }

    const response = await fetch(url, options);

    const contentType = response.headers.get('Content-Type');

    if(!contentType){
        return;
    }

    const result = await response.json();

    return result;
};

export default {
    get: requester.bind(null, "GET"),
    post: requester.bind(null, "POST"),
    put: requester.bind(null, "PUT"),
    delete: requester.bind(null, "DELETE"),
};
