# Gatsby fela starter app

## Install the application

`yarn`

## Start the application

`yarn start`


### Version releasing

Whenever you've done some changes in this project and want to relase new package version simply run `yarn release` and then provide the version you want to release

```sh
yarn release --patch # increment patch number of the version
yarn release --minor # increment minor number of the version
yarn release --major # increment major number of the version
yarn release --prepatch # create prerelease patch version
yarn release --preminor # create prerelease minor version
yarn release --premajor # create prerelease major version
yarn release # start command line prompt to let you type version manually
```

which cause several things to happen

1. Provided version is set up in `package.json`
2. New release record is created in `CHANGELOG.md`
3. Package changelog is opened at VS Code editor and **wait for your adjustments**
    - Keep there only package related changes and improvements
    - Repository maintenance stuff are not interesting for package users
    - When you're done, just save and close the file
    - If you don't have VS Code editor installed, release process will fail - sorry 🙁 (_we'll try to solve this in future_)
4. After you close changelog, new release commit is created and tagged with version
5. **You need to run `git push && git push --tags`**
6. Now you're work is done and new version is sent to CI!
