export function errorHandler(error: any) {
    return error.response && error.response.data.msg ? error.response.data.msg : error.message;
}