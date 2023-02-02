// 禁止背景层滑动问题
function stopRolling(id) {
  document.getElementById(id).addEventListener('touchmove', function (e) {
    e.preventDefault()
  })
}

//解决ios移动端input调软键盘问题
FastClick.prototype.focus = function (targetElement) {
  let length
  let isIphone = navigator.userAgent.indexOf('iPhone') != -1
  if (
    isIphone &&
    targetElement.setSelectionRange &&
    targetElement.type.indexOf('date') !== 0 &&
    targetElement.type !== 'time' &&
    targetElement.type !== 'month' &&
    targetElement.type !== 'email'
  ) {
    length = targetElement.value.length
    targetElement.setSelectionRange(length, length)
    /*修复bug ios 11.3不弹出键盘，这里加上聚焦代码，让其强制聚焦弹出键盘*/
    targetElement.focus()
  } else {
    targetElement.focus()
  }
}

// ios页面后退不刷新
window.onpageshow = function (event) {
  var u = navigator.userAgent
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
  if (event.persisted || (window.performance && window.performance.navigation.type)) {
    if (isiOS) {
      if (
        vue.$route &&
        vue.$route.matched[0] &&
        vue.$route.matched[0].components &&
        vue.$route.matched[0].components.default &&
        vue.$route.matched[0].components.default.onIosPageShow
      ) {
        vue.$route.matched[0].components.default.onIosPageShow.call(vue.$route.matched[0].instances.default)
      }
    } else if (isAndroid) {
      if (
        vue.$route &&
        vue.$route.matched[0] &&
        vue.$route.matched[0].components &&
        vue.$route.matched[0].components.default &&
        vue.$route.matched[0].components.default.onAndroidPageShow
      ) {
        vue.$route.matched[0].components.default.onAndroidPageShow.call(vue.$route.matched[0].instances.default)
      }
    }
  }
}
