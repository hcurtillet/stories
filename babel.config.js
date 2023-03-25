module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    // This needs to be mirrored in tsconfig.json
                    '@assets': './src/assets',
                    '@api': './src/api',
                    '@components': './src/components',
                    '@constants': './src/constants',
                    '@screens': './src/screens',
                    '@store': './src/store',
                    '@UI': './src/UI',
                    '@utils': './src/utils',
                    '@types': './src/types',
                },
            },
        ],
        [
            'module:react-native-dotenv',
            {
                envName: 'APP_ENV',
                moduleName: '@env',
                path: '.env',
                blocklist: null,
                allowlist: null,
                safe: false,
                allowUndefined: true,
                verbose: false,
            },
        ],
    ],
};
