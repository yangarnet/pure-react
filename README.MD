instead of having prettier and eslint locally, can do this in the code base, so will have consisten style formatting, a lot of benefits of doing so.

add prettier and eslint to your react project

$ yarn add -D prettier
$ yarn add -D eslint
$ yarn add -D eslint-plugin-prettier
$ yarn add -D eslint-config-prettier

then add the .prettierrc and .eslintrc file to the root of the project

git hook: husky

run linting for CI/CD
