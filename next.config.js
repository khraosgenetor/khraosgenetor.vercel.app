module.exports = {
    reactStrictMode: false,
    async redirects() {
        return [
            {
                source: '/portfolio',
                destination: 'https://portfolio.khraos.in',
                permanent: true,
            }
        ]
    }
};