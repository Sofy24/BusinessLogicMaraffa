# CHANGELOG

## [1.0.0](https://github.com/Sofy24/BusinessLogicMaraffa/releases/tag/1.0.0) - 2024-08-05 10:38:22

## What's Changed
* Feature/game service api by @Sofy24 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/1
* Feature/GitHub action by @mega2799 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/2
* Edited the githubAction to deploy, build and test by @mega2799 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/3
* fix-CI: Run only on pull requests specific actions by @mega2799 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/4
* fix: better CI flow by @mega2799 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/5
* fix: update node version by @mega2799 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/6
* fix: removed tagged version at the moment by @mega2799 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/7
* Feature/dockerization by @mega2799 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/8
* Feature/game modes by @Sofy24 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/10
* fix: checkMaraffaTest by @Sofy24 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/11
* fix: a typo by @Sofy24 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/12
* feat: controller endpoint added by @mega2799 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/13
* Feature/play-card by @mega2799 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/14
* fix: parenthesis in test by @mega2799 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/15
* Feature/docker-raspi by @mega2799 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/17
* Feature/docker-raspi by @mega2799 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/18
* fix: version raspberry by @mega2799 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/19
* Feature/docker-raspi by @mega2799 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/20
* fix: const ELEVEN to zero must be multiple of 3 by @mega2799 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/21
* Develop by @mega2799 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/22
* Feature/game modes by @Sofy24 in https://github.com/Sofy24/BusinessLogicMaraffa/pull/9

## New Contributors
* @Sofy24 made their first contribution in https://github.com/Sofy24/BusinessLogicMaraffa/pull/1

**Full Changelog**: https://github.com/Sofy24/BusinessLogicMaraffa/commits/1.0.0

### Feature

- general:
  - docker buildx ([adeee13](https://github.com/Sofy24/BusinessLogicMaraffa/commit/adeee13d8fd62581c6bb502cd8224e42c9d26b2c)) ([#17](https://github.com/Sofy24/BusinessLogicMaraffa/pull/17))
  - dockerization for raspberry ([575b649](https://github.com/Sofy24/BusinessLogicMaraffa/commit/575b64977d82f606ec4606d76fcfc16f8c865320)) ([#16](https://github.com/Sofy24/BusinessLogicMaraffa/pull/16))
  - controller endpoint added ([015ce8d](https://github.com/Sofy24/BusinessLogicMaraffa/commit/015ce8d9859bfca86d0b7297a309232d5e6374f2)) ([#13](https://github.com/Sofy24/BusinessLogicMaraffa/pull/13))
  - introduced the play card logic ([4efd3d0](https://github.com/Sofy24/BusinessLogicMaraffa/commit/4efd3d07d395ea83cabdebd29b9ac1c541b85938)) ([#13](https://github.com/Sofy24/BusinessLogicMaraffa/pull/13))
  - added game modes ([d788c43](https://github.com/Sofy24/BusinessLogicMaraffa/commit/d788c43152da7056f9a12e1bbeceaf42a16c8018)) ([#10](https://github.com/Sofy24/BusinessLogicMaraffa/pull/10))
  - docker container image is now lightweight and exposes port 3000 ([8e91702](https://github.com/Sofy24/BusinessLogicMaraffa/commit/8e917027e8cb0081dd43de7b80d08bb6dc1c702e)) ([#8](https://github.com/Sofy24/BusinessLogicMaraffa/pull/8))
  - deploy versioned with tag ! ([92755de](https://github.com/Sofy24/BusinessLogicMaraffa/commit/92755de871349a6a9c83b8316a0610bf130dc30b)) ([#5](https://github.com/Sofy24/BusinessLogicMaraffa/pull/5))
  - deploy versioned with tag ! ([8c29928](https://github.com/Sofy24/BusinessLogicMaraffa/commit/8c29928021530804f9cdfa8b1bc485edd690eb88)) ([#5](https://github.com/Sofy24/BusinessLogicMaraffa/pull/5))
  - feat-CI: attempt to run deploy only on successfull pull requests ([b9e9663](https://github.com/Sofy24/BusinessLogicMaraffa/commit/b9e9663eba072caada3f8fd9f9b78ed78d2d9178)) ([#3](https://github.com/Sofy24/BusinessLogicMaraffa/pull/3))
  - addded the permissions ! ([277c411](https://github.com/Sofy24/BusinessLogicMaraffa/commit/277c41132852b5f912f2f14c7d2efc4ec154150f)) ([#3](https://github.com/Sofy24/BusinessLogicMaraffa/pull/3))
  - actually needed a github token to push ([178b96a](https://github.com/Sofy24/BusinessLogicMaraffa/commit/178b96a35334e6892e534b05e700c7a010afe6ce)) ([#3](https://github.com/Sofy24/BusinessLogicMaraffa/pull/3))
  - minimal dockerfile and action running always ( at the moment ) ([ab9666e](https://github.com/Sofy24/BusinessLogicMaraffa/commit/ab9666e29115c3f41e97d32637b142dfd8488845)) ([#2](https://github.com/Sofy24/BusinessLogicMaraffa/pull/2))
  - CI for node build-and-test and the skeleton of deploy ([69c1fd5](https://github.com/Sofy24/BusinessLogicMaraffa/commit/69c1fd5e3b3798221ef1611d37715795dec3bafe)) ([#2](https://github.com/Sofy24/BusinessLogicMaraffa/pull/2))
  - compute score ([675e6ff](https://github.com/Sofy24/BusinessLogicMaraffa/commit/675e6ffc0d8094d913ebff1ab7e25f63dfcddda1)) ([#1](https://github.com/Sofy24/BusinessLogicMaraffa/pull/1))
  - startRound and checkMaraffa ([a0434cf](https://github.com/Sofy24/BusinessLogicMaraffa/commit/a0434cfe7ff57e19523b76c0d42fd36bda5fe39c)) ([#1](https://github.com/Sofy24/BusinessLogicMaraffa/pull/1))

### Bug Fixes

- general:
  - const ELEVEN to zero must be multiple of 3 ([477bcf1](https://github.com/Sofy24/BusinessLogicMaraffa/commit/477bcf1fd46f1889252b00dff686db2242757779)) ([#21](https://github.com/Sofy24/BusinessLogicMaraffa/pull/21))
  - eleven to zero score ([2ff7e56](https://github.com/Sofy24/BusinessLogicMaraffa/commit/2ff7e5602c95b394e80cff4ccf9341b44bb1fa52)) ([#20](https://github.com/Sofy24/BusinessLogicMaraffa/pull/20))
  - version raspberry ([55c09c8](https://github.com/Sofy24/BusinessLogicMaraffa/commit/55c09c8e29d690ca7cc8e7cfc00b8714a5a060ca)) ([#19](https://github.com/Sofy24/BusinessLogicMaraffa/pull/19))
  - tag provided ([81ed88b](https://github.com/Sofy24/BusinessLogicMaraffa/commit/81ed88ba8fcfcb485cf7322d0e8e2bd806b6056e)) ([#18](https://github.com/Sofy24/BusinessLogicMaraffa/pull/18))
  - parenthesis in test ([da38447](https://github.com/Sofy24/BusinessLogicMaraffa/commit/da38447cb237378a5c10dde92820dd259183507a)) ([#15](https://github.com/Sofy24/BusinessLogicMaraffa/pull/15))
  - parenthesis in test ([7644059](https://github.com/Sofy24/BusinessLogicMaraffa/commit/764405954fd49dd841770d98a19afb10c47a272c)) ([#14](https://github.com/Sofy24/BusinessLogicMaraffa/pull/14))
  - a typo ([9e5c2d8](https://github.com/Sofy24/BusinessLogicMaraffa/commit/9e5c2d88cef1126c7e18ffa3a490772593034885)) ([#12](https://github.com/Sofy24/BusinessLogicMaraffa/pull/12))
  - checkMaraffaTest ([d26475e](https://github.com/Sofy24/BusinessLogicMaraffa/commit/d26475e97f80f12ff3aaf197ec11e0f8a3d89702)) ([#11](https://github.com/Sofy24/BusinessLogicMaraffa/pull/11))
  - change a json in checkMaraffa ([9871cb4](https://github.com/Sofy24/BusinessLogicMaraffa/commit/9871cb4e5ce66adec2ba65a5b29a24f92779bd91)) ([#10](https://github.com/Sofy24/BusinessLogicMaraffa/pull/10))
  - compute score ([aec3f74](https://github.com/Sofy24/BusinessLogicMaraffa/commit/aec3f7453781d508718c96a9e280f0debe395884)) ([#10](https://github.com/Sofy24/BusinessLogicMaraffa/pull/10))
  - enable use of cors to dialogue ([34a633c](https://github.com/Sofy24/BusinessLogicMaraffa/commit/34a633cdcf440b15a4a8969af34fce25c07144d6)) ([#8](https://github.com/Sofy24/BusinessLogicMaraffa/pull/8))
  - removed tagged version at the moment ([f0926bc](https://github.com/Sofy24/BusinessLogicMaraffa/commit/f0926bcbb2202b0fc0bdecda98ad296f561dc664)) ([#7](https://github.com/Sofy24/BusinessLogicMaraffa/pull/7))
  - update node version ([0a372e6](https://github.com/Sofy24/BusinessLogicMaraffa/commit/0a372e6bc18d9803679d1bd883e781b473bb81e5)) ([#6](https://github.com/Sofy24/BusinessLogicMaraffa/pull/6))
  - better naming for container image ([0e14516](https://github.com/Sofy24/BusinessLogicMaraffa/commit/0e14516acd625774e4a91e1cdbb2a83cc0d75551)) ([#5](https://github.com/Sofy24/BusinessLogicMaraffa/pull/5))
  - fix-CI: run only on pull requests specific actions ([87cc4da](https://github.com/Sofy24/BusinessLogicMaraffa/commit/87cc4da15299c2ee3cb052c6cd59d590c3eb325d)) ([#4](https://github.com/Sofy24/BusinessLogicMaraffa/pull/4))
  - fix-CI: run only on pull requests specific actions ([cf609e1](https://github.com/Sofy24/BusinessLogicMaraffa/commit/cf609e172b556b4f240d1cac61b647bed802f9cb)) ([#4](https://github.com/Sofy24/BusinessLogicMaraffa/pull/4))
  - fix-CI: run only on pull requests specific actions ([4162503](https://github.com/Sofy24/BusinessLogicMaraffa/commit/41625038c228fc5f1215e04e7938b2f9fca2ed9d)) ([#4](https://github.com/Sofy24/BusinessLogicMaraffa/pull/4))
  - fix-CI: run only on pull requests specific actions ([290dd64](https://github.com/Sofy24/BusinessLogicMaraffa/commit/290dd64ab4af061fa3d6fe763c4d2d3733b40291)) ([#4](https://github.com/Sofy24/BusinessLogicMaraffa/pull/4))
  - separeted test from build ([6dcdb82](https://github.com/Sofy24/BusinessLogicMaraffa/commit/6dcdb8204d0ead801602086244234277b8e7cdb9)) ([#3](https://github.com/Sofy24/BusinessLogicMaraffa/pull/3))
  - divided in more jobs ! ([bc9e2bf](https://github.com/Sofy24/BusinessLogicMaraffa/commit/bc9e2bf31b52499fe7b992ca7d5a6b4854c4bbb2)) ([#3](https://github.com/Sofy24/BusinessLogicMaraffa/pull/3))
  - deploy with cache ! ([df121b7](https://github.com/Sofy24/BusinessLogicMaraffa/commit/df121b723b8ba42baa44fe8eca234be41823cc98)) ([#3](https://github.com/Sofy24/BusinessLogicMaraffa/pull/3))
  - added the node setup in deploy job ([f44d5ff](https://github.com/Sofy24/BusinessLogicMaraffa/commit/f44d5ffc59ff9feb7de19df88b1c2fb9cff1735c)) ([#3](https://github.com/Sofy24/BusinessLogicMaraffa/pull/3))
  - non-capital letters in github registry name ([06b9c54](https://github.com/Sofy24/BusinessLogicMaraffa/commit/06b9c54769ace46fe93357f0b0743023903b4e5e)) ([#3](https://github.com/Sofy24/BusinessLogicMaraffa/pull/3))
  - removed the lower case from build ([3131c8e](https://github.com/Sofy24/BusinessLogicMaraffa/commit/3131c8e7c712be655a59134db17be3d602c85a38)) ([#3](https://github.com/Sofy24/BusinessLogicMaraffa/pull/3))
  - removed the capital letters from docker build, will it be pushed ? ([1d98dec](https://github.com/Sofy24/BusinessLogicMaraffa/commit/1d98dec36e19405683a9af9801d317da605f2280)) ([#3](https://github.com/Sofy24/BusinessLogicMaraffa/pull/3))
  - removed the merged true to deploy ([227df18](https://github.com/Sofy24/BusinessLogicMaraffa/commit/227df18bb992e43f5d00cf457c2615dff1a50d28)) ([#3](https://github.com/Sofy24/BusinessLogicMaraffa/pull/3))
  - added the forgot file yarn.lock and workflow with pull request ([9f935b5](https://github.com/Sofy24/BusinessLogicMaraffa/commit/9f935b5ec4686aef651d15012c3d1ee4411d257f)) ([#2](https://github.com/Sofy24/BusinessLogicMaraffa/pull/2))
  - removed tagged versioning (at the moment) ([0bc3e0f](https://github.com/Sofy24/BusinessLogicMaraffa/commit/0bc3e0f27e1a71079da1e988aa496e03eb27cb4a)) ([#2](https://github.com/Sofy24/BusinessLogicMaraffa/pull/2))
  - fix-CI: deploy versioning with images kinda resolved ? ([30cde9e](https://github.com/Sofy24/BusinessLogicMaraffa/commit/30cde9ea6c8eb62bdae84e79cf394ef9d936f8fc)) ([#2](https://github.com/Sofy24/BusinessLogicMaraffa/pull/2))
  - fixed computeScore ([4390af1](https://github.com/Sofy24/BusinessLogicMaraffa/commit/4390af12d1006199020a3ac016e3db8b05ce86fc)) ([#1](https://github.com/Sofy24/BusinessLogicMaraffa/pull/1))

\* *This CHANGELOG was automatically generated by [auto-generate-changelog](https://github.com/BobAnkh/auto-generate-changelog)*
