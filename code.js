// 禁止背景层滑动问题
function stopRolling(id) {
  document.getElementById(id).addEventListener('touchmove', function (e) {
    e.preventDefault()
  })
}
