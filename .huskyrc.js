// .huskyrc.js
module.exports = {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "lerna run precommit --concurrency 2 --stream",
      "pre-push": "lerna run lint"
    }
  }