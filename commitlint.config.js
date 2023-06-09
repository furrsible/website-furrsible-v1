// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation only changes
// feature: A new feature
// update: Modifying an already existing feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests
// chore – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
// wip - just want to commit but work is still in progress
// task - install depenpendency
// a11y - update an accessiblity feature

module.exports = {
  extends: [`@commitlint/config-conventional`],
  rules: {
    'body-leading-blank': [1, `always`],
    'body-max-line-length': [2, `always`, 100],
    'footer-leading-blank': [1, `always`],
    'footer-max-line-length': [2, `always`, 100],
    'header-max-length': [2, `always`, 100],
    'scope-case': [2, `always`, `lower-case`],
    'subject-case': [
      2,
      `never`,
      [`sentence-case`, `start-case`, `pascal-case`, `upper-case`],
    ],
    'subject-empty': [2, `never`],
    'subject-full-stop': [2, `never`, `.`],
    'type-case': [2, `always`, `lower-case`],
    'type-empty': [2, `never`],
    'type-enum': [
      2,
      `always`,
      [
        `build`,
        `chore`,
        `docs`,
        `feature`,
        `fix`,
        `perf`,
        `refactor`,
        `style`,
        `task`,
        `update`,
        `a11y`,
      ],
    ],
  },
};
