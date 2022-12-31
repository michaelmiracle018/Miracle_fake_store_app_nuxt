export default function errorResponse(err) {
    const message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
    return message
}