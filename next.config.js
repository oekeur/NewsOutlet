const isProd = process.env.NODE_ENV === "production";
module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
    trailingSlash: true,
    future: {
        webpack5: true,
    },
    basePath: isProd ? "/NewsOutlet" : "",
    assetPrefix: isProd ? "/NewsOutlet/blob/gh-pages/" : "",
};
