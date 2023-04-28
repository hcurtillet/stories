module.exports = {
    root: true,
    extends: ['@react-native-community', 'prettier'],
    plugins: ['prettier', 'unused-imports'],
    rules: {
        curly: 'error',
        semi: 'error',
        'no-console': 'error',
        'unused-imports/no-unused-imports-ts': 'error',
        'arrow-body-style': ['error', 'as-needed'],
    },
};
