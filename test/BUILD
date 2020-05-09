load("@npm//mocha:index.bzl", "mocha_test")

mocha_test(
    name = "example_test",
    args = [
        "$(location index.test.js)",
       "--require @babel/register",
    ],
    data = [
        "index.test.js",
        "//:webpack.config.js",
        "@npm//@babel/register",
    ],
)