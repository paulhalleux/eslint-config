module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "simple-import-sort"
    ],
    rules: {
        indent: [
            "warn",
            "tab"
        ],
        "simple-import-sort/exports": "warn",
        "simple-import-sort/imports": "warn",
        'linebreak-style': [
            "warn",
            "windows"
        ],
        quotes: [
            "warn",
            "single"
        ],
        semi: "off",
        "@typescript-eslint/semi": ["warn"],
        'keyword-spacing': [
            "warn",
            {
                "before": true
            }
        ],
        'no-multi-spaces': [
            "warn"
        ],
        'no-trailing-spaces': [
            "warn"
        ],
        'object-curly-spacing': [
            "warn",
            "always"
        ],
        'react/jsx-wrap-multilines': [
            "error",
            {
                "declaration": "parens-new-line",
                "assignment": "parens-new-line",
                "return": "parens-new-line",
                "arrow": "parens-new-line",
                "condition": "parens-new-line",
                "logical": "parens-new-line",
                "prop": "parens-new-line"
            }
        ],
        'no-empty-pattern': "off",
        '@typescript-eslint/no-explicit-any': "off",
        'react/jsx-first-prop-new-line': [
            "warn",
            "multiline"
        ]
    }
}