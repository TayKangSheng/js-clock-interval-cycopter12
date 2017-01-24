document.addEventListener('DOMContentLoaded', function () {
  var seconds = document.querySelector('#second')
  var minute = document.querySelector('#minute')
  var hour = document.querySelector('#hour')
  var clock = document.querySelector('#clock')
  // var degrees = 45
  clock.appendChild(minute)
  clock.appendChild(seconds)


  // var now = new Date()
  //   var h = now.getHours()
  //   var m = now.getMinutes()
  //   var s = now.getSeconds()

  var count = 0

  function secRotation (secTime) {
    return (secTime / 60) * 360
  }
  function hrRotation (hourTime) {
    return (hourTime / 12) * 360
  }
  function minRotation (minTime) {
    return (minTime / 60) * 360
  }

  // Make second move first
  // setInterval(secRotation, 1000)
  // var secDegree = 90
  // seconds.style.transform = 'rotate(' + secDegree + 'deg)'
  // function secRotation(){
  //  //360 degree = 60 secs for every second  secDegree increase by 6 degree
  // secDegree+=6

  function setRotation () {
    var minRota = minRotation(count / 60)
    var secRota = secRotation(count)
    var hourRota = hrRotation(count / 3600)

    var handsArr = [seconds, minute, hour]
    var rotaArr = [secRota, minRota, hourRota]

    for (var i = 0; i < handsArr.length; i++) {
      handsArr[i].style.transform = 'rotate(' + rotaArr[i] + 'deg)'
    }
    // seconds.style.transform = 'rotate(' + secRotation(secTime) + 'deg)'
    // minute.style.transform = 'rotate(' + minRotation(minTime) + 'deg)'
    // hour.style.transform = 'rotate(' + hrRotation(hourTime) + 'deg)'
    count++
  }


  // secondRotation(0)
  // secondRotation(59)
  //
  // hourRotation(12)
  // hourRotation(5)
  setInterval(setRotation, 1000)
})
