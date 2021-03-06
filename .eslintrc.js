module.exports = {
    extends: [
      "plugin:prettier/recommended",
      "airbnb",
      "plugin:react/recommended"
    ],
    rules: {
      "import/prefer-default-export": 0,
      "space-before-function-paren": 0,
      "comma-dangle": 0,
      quotes: [
        2,
        "double",
        {
          avoidEscape: true,
          allowTemplateLiterals: true
        }
      ]
    },
    plugins: ["react"]
  };