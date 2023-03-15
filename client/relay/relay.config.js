module.exports = {
    src: "./src",
    language: "typescript",
    schema: "../graphql-reference/schema.graphql",
    eagerEsModules: true,
    exclude: [
        "**/node_modules/**",
        "**/__generated__/**"
    ]
}