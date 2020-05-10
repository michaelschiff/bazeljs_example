load("@npm//mocha:index.bzl", "mocha_test")
load("@npm//@babel/cli:index.bzl", "babel")

babel(
    name = "test_babel",
    data = [
        "//:.babelrc.json",
        "index.test.js",
        "@npm//babel-plugin-module-resolver",
        "@npm//@babel/preset-env",
        "@npm//@babel/preset-flow",
        "@npm//@babel/preset-react",
    ],
    output_dir = True,
    args = [
        "test",
        "--config-file",
        "$(location //:.babelrc.json)",
        "--out-dir",
        "$(@D)",
    ],
)

mocha_test(
    name = "example_test",
    args = [
       "**/*.test.js",
    ],
    data = [
        ":test_babel",
        "@npm//expect",
    ],
)