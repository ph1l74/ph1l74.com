const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': 'rgb(141, 186, 33)' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};