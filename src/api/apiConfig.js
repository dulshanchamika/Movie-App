const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '48dab66512abd5c6b39fb35c1be6a760',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;