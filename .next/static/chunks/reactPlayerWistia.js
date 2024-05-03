/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerWistia"],{

/***/ "./node_modules/react-player/lib/players/Wistia.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Wistia.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Wistia_exports = {};\n__export(Wistia_exports, {\n  default: () => Wistia\n});\nmodule.exports = __toCommonJS(Wistia_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://fast.wistia.com/assets/external/E-v1.js\";\nconst SDK_GLOBAL = \"Wistia\";\nconst PLAYER_ID_PREFIX = \"wistia-player-\";\nclass Wistia extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"playerID\", this.props.config.playerId || `${PLAYER_ID_PREFIX}${(0, import_utils.randomString)()}`);\n    // Proxy methods to prevent listener leaks\n    __publicField(this, \"onPlay\", (...args) => this.props.onPlay(...args));\n    __publicField(this, \"onPause\", (...args) => this.props.onPause(...args));\n    __publicField(this, \"onSeek\", (...args) => this.props.onSeek(...args));\n    __publicField(this, \"onEnded\", (...args) => this.props.onEnded(...args));\n    __publicField(this, \"onPlaybackRateChange\", (...args) => this.props.onPlaybackRateChange(...args));\n    __publicField(this, \"mute\", () => {\n      this.callPlayer(\"mute\");\n    });\n    __publicField(this, \"unmute\", () => {\n      this.callPlayer(\"unmute\");\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  load(url) {\n    const { playing, muted, controls, onReady, config, onError } = this.props;\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then((Wistia2) => {\n      if (config.customControls) {\n        config.customControls.forEach((control) => Wistia2.defineControl(control));\n      }\n      window._wq = window._wq || [];\n      window._wq.push({\n        id: this.playerID,\n        options: {\n          autoPlay: playing,\n          silentAutoPlay: \"allow\",\n          muted,\n          controlsVisibleOnLoad: controls,\n          fullscreenButton: controls,\n          playbar: controls,\n          playbackRateControl: controls,\n          qualityControl: controls,\n          volumeControl: controls,\n          settingsControl: controls,\n          smallPlayButton: controls,\n          ...config.options\n        },\n        onReady: (player) => {\n          this.player = player;\n          this.unbind();\n          this.player.bind(\"play\", this.onPlay);\n          this.player.bind(\"pause\", this.onPause);\n          this.player.bind(\"seek\", this.onSeek);\n          this.player.bind(\"end\", this.onEnded);\n          this.player.bind(\"playbackratechange\", this.onPlaybackRateChange);\n          onReady();\n        }\n      });\n    }, onError);\n  }\n  unbind() {\n    this.player.unbind(\"play\", this.onPlay);\n    this.player.unbind(\"pause\", this.onPause);\n    this.player.unbind(\"seek\", this.onSeek);\n    this.player.unbind(\"end\", this.onEnded);\n    this.player.unbind(\"playbackratechange\", this.onPlaybackRateChange);\n  }\n  play() {\n    this.callPlayer(\"play\");\n  }\n  pause() {\n    this.callPlayer(\"pause\");\n  }\n  stop() {\n    this.unbind();\n    this.callPlayer(\"remove\");\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.callPlayer(\"time\", seconds);\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"volume\", fraction);\n  }\n  setPlaybackRate(rate) {\n    this.callPlayer(\"playbackRate\", rate);\n  }\n  getDuration() {\n    return this.callPlayer(\"duration\");\n  }\n  getCurrentTime() {\n    return this.callPlayer(\"time\");\n  }\n  getSecondsLoaded() {\n    return null;\n  }\n  render() {\n    const { url } = this.props;\n    const videoID = url && url.match(import_patterns.MATCH_URL_WISTIA)[1];\n    const className = `wistia_embed wistia_async_${videoID}`;\n    const style = {\n      width: \"100%\",\n      height: \"100%\"\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\"div\", { id: this.playerID, key: videoID, className, style });\n  }\n}\n__publicField(Wistia, \"displayName\", \"Wistia\");\n__publicField(Wistia, \"canPlay\", import_patterns.canPlay.wistia);\n__publicField(Wistia, \"loopOnEnded\", true);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL1dpc3RpYS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsNkRBQTZEO0FBQzNJO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNEZBQTRGO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSw4QkFBOEI7QUFDdkc7QUFDQTtBQUNBLG9EQUFvRCxrQkFBa0IsYUFBYTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLDRDQUFPO0FBQzFDLG1CQUFtQixtQkFBTyxDQUFDLDBEQUFVO0FBQ3JDLHNCQUFzQixtQkFBTyxDQUFDLGdFQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGlCQUFpQixFQUFFLGlDQUFpQztBQUN6SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscURBQXFEO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCO0FBQ0EsbURBQW1ELFFBQVE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsbURBQW1EO0FBQzFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9saWIvcGxheWVycy9XaXN0aWEuanM/Y2ZhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0UHJvdG9PZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9FU00gPSAobW9kLCBpc05vZGVNb2RlLCB0YXJnZXQpID0+ICh0YXJnZXQgPSBtb2QgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2QpKSA6IHt9LCBfX2NvcHlQcm9wcyhcbiAgLy8gSWYgdGhlIGltcG9ydGVyIGlzIGluIG5vZGUgY29tcGF0aWJpbGl0eSBtb2RlIG9yIHRoaXMgaXMgbm90IGFuIEVTTVxuICAvLyBmaWxlIHRoYXQgaGFzIGJlZW4gY29udmVydGVkIHRvIGEgQ29tbW9uSlMgZmlsZSB1c2luZyBhIEJhYmVsLVxuICAvLyBjb21wYXRpYmxlIHRyYW5zZm9ybSAoaS5lLiBcIl9fZXNNb2R1bGVcIiBoYXMgbm90IGJlZW4gc2V0KSwgdGhlbiBzZXRcbiAgLy8gXCJkZWZhdWx0XCIgdG8gdGhlIENvbW1vbkpTIFwibW9kdWxlLmV4cG9ydHNcIiBmb3Igbm9kZSBjb21wYXRpYmlsaXR5LlxuICBpc05vZGVNb2RlIHx8ICFtb2QgfHwgIW1vZC5fX2VzTW9kdWxlID8gX19kZWZQcm9wKHRhcmdldCwgXCJkZWZhdWx0XCIsIHsgdmFsdWU6IG1vZCwgZW51bWVyYWJsZTogdHJ1ZSB9KSA6IHRhcmdldCxcbiAgbW9kXG4pKTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xudmFyIF9fcHVibGljRmllbGQgPSAob2JqLCBrZXksIHZhbHVlKSA9PiB7XG4gIF9fZGVmTm9ybWFsUHJvcChvYmosIHR5cGVvZiBrZXkgIT09IFwic3ltYm9sXCIgPyBrZXkgKyBcIlwiIDoga2V5LCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG52YXIgV2lzdGlhX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KFdpc3RpYV9leHBvcnRzLCB7XG4gIGRlZmF1bHQ6ICgpID0+IFdpc3RpYVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhXaXN0aWFfZXhwb3J0cyk7XG52YXIgaW1wb3J0X3JlYWN0ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGltcG9ydF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBpbXBvcnRfcGF0dGVybnMgPSByZXF1aXJlKFwiLi4vcGF0dGVybnNcIik7XG5jb25zdCBTREtfVVJMID0gXCJodHRwczovL2Zhc3Qud2lzdGlhLmNvbS9hc3NldHMvZXh0ZXJuYWwvRS12MS5qc1wiO1xuY29uc3QgU0RLX0dMT0JBTCA9IFwiV2lzdGlhXCI7XG5jb25zdCBQTEFZRVJfSURfUFJFRklYID0gXCJ3aXN0aWEtcGxheWVyLVwiO1xuY2xhc3MgV2lzdGlhIGV4dGVuZHMgaW1wb3J0X3JlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImNhbGxQbGF5ZXJcIiwgaW1wb3J0X3V0aWxzLmNhbGxQbGF5ZXIpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJwbGF5ZXJJRFwiLCB0aGlzLnByb3BzLmNvbmZpZy5wbGF5ZXJJZCB8fCBgJHtQTEFZRVJfSURfUFJFRklYfSR7KDAsIGltcG9ydF91dGlscy5yYW5kb21TdHJpbmcpKCl9YCk7XG4gICAgLy8gUHJveHkgbWV0aG9kcyB0byBwcmV2ZW50IGxpc3RlbmVyIGxlYWtzXG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uUGxheVwiLCAoLi4uYXJncykgPT4gdGhpcy5wcm9wcy5vblBsYXkoLi4uYXJncykpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvblBhdXNlXCIsICguLi5hcmdzKSA9PiB0aGlzLnByb3BzLm9uUGF1c2UoLi4uYXJncykpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvblNlZWtcIiwgKC4uLmFyZ3MpID0+IHRoaXMucHJvcHMub25TZWVrKC4uLmFyZ3MpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25FbmRlZFwiLCAoLi4uYXJncykgPT4gdGhpcy5wcm9wcy5vbkVuZGVkKC4uLmFyZ3MpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25QbGF5YmFja1JhdGVDaGFuZ2VcIiwgKC4uLmFyZ3MpID0+IHRoaXMucHJvcHMub25QbGF5YmFja1JhdGVDaGFuZ2UoLi4uYXJncykpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJtdXRlXCIsICgpID0+IHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcihcIm11dGVcIik7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInVubXV0ZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoXCJ1bm11dGVcIik7XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbk1vdW50ICYmIHRoaXMucHJvcHMub25Nb3VudCh0aGlzKTtcbiAgfVxuICBsb2FkKHVybCkge1xuICAgIGNvbnN0IHsgcGxheWluZywgbXV0ZWQsIGNvbnRyb2xzLCBvblJlYWR5LCBjb25maWcsIG9uRXJyb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgKDAsIGltcG9ydF91dGlscy5nZXRTREspKFNES19VUkwsIFNES19HTE9CQUwpLnRoZW4oKFdpc3RpYTIpID0+IHtcbiAgICAgIGlmIChjb25maWcuY3VzdG9tQ29udHJvbHMpIHtcbiAgICAgICAgY29uZmlnLmN1c3RvbUNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IFdpc3RpYTIuZGVmaW5lQ29udHJvbChjb250cm9sKSk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuX3dxID0gd2luZG93Ll93cSB8fCBbXTtcbiAgICAgIHdpbmRvdy5fd3EucHVzaCh7XG4gICAgICAgIGlkOiB0aGlzLnBsYXllcklELFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYXV0b1BsYXk6IHBsYXlpbmcsXG4gICAgICAgICAgc2lsZW50QXV0b1BsYXk6IFwiYWxsb3dcIixcbiAgICAgICAgICBtdXRlZCxcbiAgICAgICAgICBjb250cm9sc1Zpc2libGVPbkxvYWQ6IGNvbnRyb2xzLFxuICAgICAgICAgIGZ1bGxzY3JlZW5CdXR0b246IGNvbnRyb2xzLFxuICAgICAgICAgIHBsYXliYXI6IGNvbnRyb2xzLFxuICAgICAgICAgIHBsYXliYWNrUmF0ZUNvbnRyb2w6IGNvbnRyb2xzLFxuICAgICAgICAgIHF1YWxpdHlDb250cm9sOiBjb250cm9scyxcbiAgICAgICAgICB2b2x1bWVDb250cm9sOiBjb250cm9scyxcbiAgICAgICAgICBzZXR0aW5nc0NvbnRyb2w6IGNvbnRyb2xzLFxuICAgICAgICAgIHNtYWxsUGxheUJ1dHRvbjogY29udHJvbHMsXG4gICAgICAgICAgLi4uY29uZmlnLm9wdGlvbnNcbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFkeTogKHBsYXllcikgPT4ge1xuICAgICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICAgIHRoaXMudW5iaW5kKCk7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIuYmluZChcInBsYXlcIiwgdGhpcy5vblBsYXkpO1xuICAgICAgICAgIHRoaXMucGxheWVyLmJpbmQoXCJwYXVzZVwiLCB0aGlzLm9uUGF1c2UpO1xuICAgICAgICAgIHRoaXMucGxheWVyLmJpbmQoXCJzZWVrXCIsIHRoaXMub25TZWVrKTtcbiAgICAgICAgICB0aGlzLnBsYXllci5iaW5kKFwiZW5kXCIsIHRoaXMub25FbmRlZCk7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIuYmluZChcInBsYXliYWNrcmF0ZWNoYW5nZVwiLCB0aGlzLm9uUGxheWJhY2tSYXRlQ2hhbmdlKTtcbiAgICAgICAgICBvblJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIG9uRXJyb3IpO1xuICB9XG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLnBsYXllci51bmJpbmQoXCJwbGF5XCIsIHRoaXMub25QbGF5KTtcbiAgICB0aGlzLnBsYXllci51bmJpbmQoXCJwYXVzZVwiLCB0aGlzLm9uUGF1c2UpO1xuICAgIHRoaXMucGxheWVyLnVuYmluZChcInNlZWtcIiwgdGhpcy5vblNlZWspO1xuICAgIHRoaXMucGxheWVyLnVuYmluZChcImVuZFwiLCB0aGlzLm9uRW5kZWQpO1xuICAgIHRoaXMucGxheWVyLnVuYmluZChcInBsYXliYWNrcmF0ZWNoYW5nZVwiLCB0aGlzLm9uUGxheWJhY2tSYXRlQ2hhbmdlKTtcbiAgfVxuICBwbGF5KCkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInBsYXlcIik7XG4gIH1cbiAgcGF1c2UoKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwicGF1c2VcIik7XG4gIH1cbiAgc3RvcCgpIHtcbiAgICB0aGlzLnVuYmluZCgpO1xuICAgIHRoaXMuY2FsbFBsYXllcihcInJlbW92ZVwiKTtcbiAgfVxuICBzZWVrVG8oc2Vjb25kcywga2VlcFBsYXlpbmcgPSB0cnVlKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwidGltZVwiLCBzZWNvbmRzKTtcbiAgICBpZiAoIWtlZXBQbGF5aW5nKSB7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgfVxuICB9XG4gIHNldFZvbHVtZShmcmFjdGlvbikge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInZvbHVtZVwiLCBmcmFjdGlvbik7XG4gIH1cbiAgc2V0UGxheWJhY2tSYXRlKHJhdGUpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJwbGF5YmFja1JhdGVcIiwgcmF0ZSk7XG4gIH1cbiAgZ2V0RHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbFBsYXllcihcImR1cmF0aW9uXCIpO1xuICB9XG4gIGdldEN1cnJlbnRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxQbGF5ZXIoXCJ0aW1lXCIpO1xuICB9XG4gIGdldFNlY29uZHNMb2FkZWQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXJsIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHZpZGVvSUQgPSB1cmwgJiYgdXJsLm1hdGNoKGltcG9ydF9wYXR0ZXJucy5NQVRDSF9VUkxfV0lTVElBKVsxXTtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBgd2lzdGlhX2VtYmVkIHdpc3RpYV9hc3luY18ke3ZpZGVvSUR9YDtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICB9O1xuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiB0aGlzLnBsYXllcklELCBrZXk6IHZpZGVvSUQsIGNsYXNzTmFtZSwgc3R5bGUgfSk7XG4gIH1cbn1cbl9fcHVibGljRmllbGQoV2lzdGlhLCBcImRpc3BsYXlOYW1lXCIsIFwiV2lzdGlhXCIpO1xuX19wdWJsaWNGaWVsZChXaXN0aWEsIFwiY2FuUGxheVwiLCBpbXBvcnRfcGF0dGVybnMuY2FuUGxheS53aXN0aWEpO1xuX19wdWJsaWNGaWVsZChXaXN0aWEsIFwibG9vcE9uRW5kZWRcIiwgdHJ1ZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-player/lib/players/Wistia.js\n"));

/***/ })

}]);