function overCode () {
  var seconds = document.querySelector('#second')
  var minute = document.querySelector('#minute')
  var hour = document.querySelector('#hour')
  var clock = document.querySelector('#clock')
  // var degrees = 45

  // var count = 0

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
    var now = new Date()
    var currentHour = now.getHours()
    var currentMinute = now.getMinutes()
    var currentSecond = now.getSeconds()

    var minRota = minRotation(currentMinute) // divide by 60 to get secs
    var secRota = secRotation(currentSecond)
    var hourRota = hrRotation(currentHour) // divide by 3600 to get hours

    // var handsArr = [seconds, minute, hour]
    // var rotaArr = [secRota, minRota, hourRota]

    // for (var i = 0; i < handsArr.length; i++) {
    //   handsArr[i].style.transform = 'rotate(' + rotaArr[i] + 'deg)'
    // }
    seconds.style.transform = 'rotate(' + secRota + 'deg)'
    minute.style.transform = 'rotate(' + minRota + 'deg)'
    hour.style.transform = 'rotate(' + hourRota + 'deg)'
    // count++
    }
    return{
      setRotation: setRotation,
      secRotation: secRotation,
      hrRotation: hrRotation,
      minRotation: minRotation
  }
}

  // secondRotation(0)
  // secondRotation(59)
  //
  // hourRotation(12)
  // hourRotation(5)
window.addEventListener('DOMContentLoaded', function () {
var domClock =overCode()
setInterval(domClock.setRotation, 1000)
})
