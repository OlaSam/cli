# Changelog

## [7.0.0](https://github.com/npm/cli/compare/libnpmpublish-v7.0.0-pre.4...libnpmpublish-v7.0.0) (2022-10-19)

### Features

* [`586e78d`](https://github.com/npm/cli/commit/586e78d59c3dad29e8e886a4764d2eb8021d11d1) empty commit to trigger all workspace releases (@lukekarrys)

### Dependencies

* [Workspace](https://github.com/npm/cli/compare/libnpmpack-v5.0.0-pre.4...libnpmpack-v5.0.0): `libnpmpack@5.0.0`

## [7.0.0-pre.4](https://github.com/npm/cli/compare/libnpmpublish-v7.0.0-pre.3...libnpmpublish-v7.0.0-pre.4) (2022-10-19)

### Dependencies

* [`2008ea6`](https://github.com/npm/cli/commit/2008ea6a807acbd97912799adfe97f276202cea6) `npm-package-arg@10.0.0`, `pacote@15.0.2`
* [`aa01072`](https://github.com/npm/cli/commit/aa010722996ef6de46e1bb937c6f8a94dc2844fa) [#5707](https://github.com/npm/cli/pull/5707) update the following dependencies
* [Workspace](https://github.com/npm/cli/compare/libnpmpack-v5.0.0-pre.3...libnpmpack-v5.0.0-pre.4): `libnpmpack@5.0.0-pre.4`

## [7.0.0-pre.3](https://github.com/npm/cli/compare/libnpmpublish-v7.0.0-pre.2...libnpmpublish-v7.0.0-pre.3) (2022-10-13)

### Dependencies

* [Workspace](https://github.com/npm/cli/compare/libnpmpack-v5.0.0-pre.2...libnpmpack-v5.0.0-pre.3): `libnpmpack@5.0.0-pre.3`

## [7.0.0-pre.2](https://github.com/npm/cli/compare/libnpmpublish-v7.0.0-pre.1...libnpmpublish-v7.0.0-pre.2) (2022-10-05)

### Dependencies

* [Workspace](https://github.com/npm/cli/compare/libnpmpack-v5.0.0-pre.1...libnpmpack-v5.0.0-pre.2): `libnpmpack@5.0.0-pre.2`

## [7.0.0-pre.1](https://github.com/npm/cli/compare/libnpmpublish-v7.0.0-pre.0...libnpmpublish-v7.0.0-pre.1) (2022-09-30)

### ⚠️ BREAKING CHANGES

* The default value of `access` is now `public`

### Features

* [`525654e`](https://github.com/npm/cli/commit/525654e957a80c7f47472e18240e3c8d94e0568f) default access to `public` (@wraithgar)

### Documentation

* [`f0e7584`](https://github.com/npm/cli/commit/f0e758494698d9dd8a58d07bf71c87608c36869e) [#5601](https://github.com/npm/cli/pull/5601) update docs/logging for new --access default (@wraithgar)

## [7.0.0-pre.0](https://github.com/npm/cli/compare/libnpmpublish-v6.0.5...libnpmpublish-v7.0.0-pre.0) (2022-09-08)

### ⚠ BREAKING CHANGES

* **workspaces:** all workspace packages are now compatible with the following semver range for node: `^14.17.0 || ^16.13.0 || >=18.0.0`

### Features

  * [`e95017a`](https://github.com/npm/cli/commit/e95017a07b041cbb3293e659dad853f76462c108) [#5485](https://github.com/npm/cli/pull/5485) feat(workspaces): update supported node engines in package.json (@lukekarrys)


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * libnpmpack bumped from ^4.1.3 to ^5.0.0-pre.0

## [6.0.5](https://github.com/npm/cli/compare/libnpmpublish-v6.0.4...libnpmpublish-v6.0.5) (2022-08-31)

### Dependencies

  * [`8ab12dc`](https://github.com/npm/cli/commit/8ab12dc32b26db770b868cf694cedab38f4e7460) [#5323](https://github.com/npm/cli/pull/5323) deps: `@npmcli/eslint-config@3.1.0`
* The following workspace dependencies were updated
  * devDependencies
    * libnpmpack bumped from ^4.0.0 to ^4.1.3

### [6.0.4](https://github.com/npm/cli/compare/libnpmpublish-v6.0.3...libnpmpublish-v6.0.4) (2022-04-26)


### Bug Fixes

* **libnpmpublish:** unpublish from custom reg ([#4657](https://github.com/npm/cli/issues/4657)) ([e9163b4](https://github.com/npm/cli/commit/e9163b48d8e46a80d2a4cc98c492b94dfa152cb8))


### Dependencies

* semver@7.3.7 ([c51e553](https://github.com/npm/cli/commit/c51e553a32315e4f1b703ca9030eb7ade91d1a85))

### [6.0.3](https://github.com/npm/cli/compare/libnpmpublish-v6.0.2...libnpmpublish-v6.0.3) (2022-04-06)


### Bug Fixes

* replace deprecated String.prototype.substr() ([#4667](https://github.com/npm/cli/issues/4667)) ([e3da5df](https://github.com/npm/cli/commit/e3da5df4152fbe547f7871547165328e1bf06262))
* update readme badges ([#4658](https://github.com/npm/cli/issues/4658)) ([2829cb2](https://github.com/npm/cli/commit/2829cb28a432b5ff7beeeb3bf3e7e2e174c1121d))


### Dependencies

* @npmcli/template-oss@3.2.1 ([aac01b8](https://github.com/npm/cli/commit/aac01b89caf6336a2eb34d696296303cdadd5c08))
* @npmcli/template-oss@3.2.2 ([#4639](https://github.com/npm/cli/issues/4639)) ([a59fd2c](https://github.com/npm/cli/commit/a59fd2cb863245fce56f96c90ac854e62c5c4d6f))
* ssri@9.0.0 ([a2781a3](https://github.com/npm/cli/commit/a2781a367d62328d7f870de878f1b63d66593f4f))

### [6.0.2](https://www.github.com/npm/cli/compare/libnpmpublish-v6.0.1...libnpmpublish-v6.0.2) (2022-03-15)


### Documentation

* standardize changelog heading ([#4510](https://www.github.com/npm/cli/issues/4510)) ([91f03ee](https://www.github.com/npm/cli/commit/91f03ee618bc635f9cfbded735fe98bbfa9d643f))


### Dependencies

* normalize-package-data@4.0.0 ([b2a4942](https://www.github.com/npm/cli/commit/b2a494283f45a25d1b87bc40bf2d68812871e89c))
* npm-package-arg@9.0.1 ([9555a5f](https://www.github.com/npm/cli/commit/9555a5f1d135aa1b8f7374273403efe41e99ee26))

## [3.0.1](https://github.com/npm/libnpmpublish/compare/v3.0.0...v3.0.1) (2020-03-27)

### Features

* [`3e02307`](https://github.com/npm/libnpmpublish/commit/3e02307) chore: pack tarballs using libnpmpack ([@claudiahdz](https://github.com/claudiahdz))

<a name="3.0.0"></a>
# [3.0.0](https://github.com/npm/libnpmpublish/compare/v2.0.0...v3.0.0) (2020-03-09)

### Breaking Changes

* [`ecaeb0b`](https://github.com/npm/libnpmpublish/commit/ecaeb0b) feat: pack tarballs from source code using pacote v10 ([@claudiahdz](https://github.com/claudiahdz))

* [`f6bf2b8`](https://github.com/npm/libnpmpublish/commit/f6bf2b8) feat: unpublish code refactor ([@claudiahdz](https://github.com/claudiahdz))

### Miscellaneuous

* [`5cea10f`](https://github.com/npm/libnpmpublish/commit/5cea10f) chore: basic project updates ([@claudiahdz](https://github.com/claudiahdz))
* [`3010b93`](https://github.com/npm/libnpmpublish/commit/3010b93) chore: cleanup badges + contributing ([@ruyadorno](https://github.com/ruyadorno))

---

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [6.0.1](https://www.github.com/npm/cli/compare/libnpmpublish-vlibnpmpublish@6.0.0...libnpmpublish-v6.0.1) (2022-03-03)


### Bug Fixes

* set proper workspace repo urls in package.json ([#4476](https://www.github.com/npm/cli/issues/4476)) ([0cfc155](https://www.github.com/npm/cli/commit/0cfc155db5f11ce23419e440111d99a63bf39754))

## [2.0.0](https://github.com/npm/libnpmpublish/compare/v1.1.3...v2.0.0) (2019-09-18)


### ⚠ BREAKING CHANGES

* This drops support for Node.js version 6.

### Bug Fixes

* audit warnings, drop support for Node.js v6 ([d9a1fb6](https://github.com/npm/libnpmpublish/commit/d9a1fb6))

### [1.1.3](https://github.com/npm/libnpmpublish/compare/v1.1.2...v1.1.3) (2019-09-18)

<a name="1.1.2"></a>
## [1.1.2](https://github.com/npm/libnpmpublish/compare/v1.1.1...v1.1.2) (2019-07-16)



<a name="1.1.1"></a>
## [1.1.1](https://github.com/npm/libnpmpublish/compare/v1.1.0...v1.1.1) (2019-01-22)


### Bug Fixes

* **auth:** send username in correct key ([#3](https://github.com/npm/libnpmpublish/issues/3)) ([38422d0](https://github.com/npm/libnpmpublish/commit/38422d0))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/npm/libnpmpublish/compare/v1.0.1...v1.1.0) (2018-08-31)


### Features

* **publish:** add support for publishConfig on manifests ([161723b](https://github.com/npm/libnpmpublish/commit/161723b))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/npm/libnpmpublish/compare/v1.0.0...v1.0.1) (2018-08-31)


### Bug Fixes

* **opts:** remove unused opts ([2837098](https://github.com/npm/libnpmpublish/commit/2837098))



<a name="1.0.0"></a>
# 1.0.0 (2018-08-31)


### Bug Fixes

* **api:** use opts.algorithms, return true on success ([80fe34b](https://github.com/npm/libnpmpublish/commit/80fe34b))
* **publish:** first test pass w/ bugfixes ([74135c9](https://github.com/npm/libnpmpublish/commit/74135c9))
* **publish:** full coverage test and related fixes ([b5a3446](https://github.com/npm/libnpmpublish/commit/b5a3446))


### Features

* **docs:** add README with api docs ([553c13d](https://github.com/npm/libnpmpublish/commit/553c13d))
* **publish:** add initial publish support. tests tbd ([5b3fe94](https://github.com/npm/libnpmpublish/commit/5b3fe94))
* **unpublish:** add new api with unpublish support ([1c9d594](https://github.com/npm/libnpmpublish/commit/1c9d594))
