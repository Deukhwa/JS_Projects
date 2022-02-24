const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let futureDate = new Date(2022, 1, 24, 11, 30, 0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
const date = futureDate.getDate()
let month = months[futureDate.getMonth()]
let day = weekdays[futureDate.getDay()]

giveaway.textContent = `giveaway ends on ${date}  ${month} ${year} ${day} ${hours}:${minutes}am`

const futureTime = futureDate.getTime()

const getRemainingTime = () => {
  const currentTime = new Date().getTime()
  const t = futureTime - currentTime
  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60m
  // 1d = 24h

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000

  let remainingDays = Math.floor(t / oneDay)
  let remainingHours = Math.floor((t % oneDay) / oneHour)
  let remainingMinutes = Math.floor((t % oneHour) / oneMinute)
  let remainingSeconds = Math.floor((t % oneMinute) / 1000)

  // set values array
  const values = [
    remainingDays,
    remainingHours,
    remainingMinutes,
    remainingSeconds,
  ]

  const format = (item) => {
    if (item < 10) {
      return (item = `0${item}`)
    } else {
      return item
    }
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index])
  })
}

//count down

let countdown = setInterval(getRemainingTime, 1000)
