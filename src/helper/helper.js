const getApiUrl = () => {
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:8010/proxy'
    }
    return 'http://dl.videostreamtest.ir'
}

module.exports = {
    getApiUrl,
}
