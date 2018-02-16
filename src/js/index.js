// @flow

// $FlowFixMe
import 'normalize.css'
// $FlowFixMe
import '../sass/main.scss'

const double = (n: number): number => {
  return n * 2
}

export function testMe (name: string) {
  console.log(double(12))
  return `Hi ${name}`
}

const handleHours = () => {
  const date = new Date()

  const hoursTextNode = document.querySelector('.circle--hours .text-time')
  const currHours = date.getHours()
  const currHoursStr = currHours.toString()

  const currHoursStrNew = currHoursStr.length < 2
    ? `${0 + currHoursStr}`
    : currHoursStr

  if (hoursTextNode) hoursTextNode.innerHTML = currHoursStrNew

  const hoursSliceNode = document.querySelector('.circle--hours .circle__slice')
  if (!hoursSliceNode) return

  if ((currHours > 6 && currHours <= 12) || (currHours > 18 && currHours <= 24)) {
    hoursSliceNode.classList.add('circle__slice--morethanhalf')
  } else {
    hoursSliceNode.classList.remove('circle__slice--morethanhalf')
  }

  const hoursBarNode = document.querySelector('.circle--hours .circle__bar')
  const hoursRotateDegrees = currHours / 12 * 360
  if (hoursBarNode) hoursBarNode.style.transform = `rotate(${hoursRotateDegrees}deg)`
}

const handleMins = () => {
  const date = new Date()

  const minsTextNode = document.querySelector('.circle--mins .text-time')
  const currMins = date.getMinutes()
  const currMinsStr = currMins.toString()

  const currMinsStrNew = currMinsStr.length < 2
    ? `${0 + currMinsStr}`
    : currMinsStr

  if (minsTextNode) minsTextNode.innerHTML = currMinsStrNew

  const minsSliceNode = document.querySelector('.circle--mins .circle__slice')
  const minsTotalHalf = 30

  if (!minsSliceNode) return

  if (currMins > minsTotalHalf) {
    minsSliceNode.classList.add('circle__slice--morethanhalf')
  } else {
    minsSliceNode.classList.remove('circle__slice--morethanhalf')
  }

  const minsBarNode = document.querySelector('.circle--mins .circle__bar')
  const minsRotateDegrees = currMins / 60 * 360
  if (minsBarNode) minsBarNode.style.transform = `rotate(${minsRotateDegrees}deg)`
}

const handleSecs = () => {
  const date = new Date()

  const secsTextNode = document.querySelector('.circle--secs .text-time')
  const currSecs = date.getSeconds()
  const currSecsStr = currSecs.toString()

  const currSecsStrNew = currSecsStr.length < 2
    ? `${0 + currSecsStr}`
    : currSecsStr

  if (secsTextNode) secsTextNode.innerHTML = currSecsStrNew

  const secsSliceNode = document.querySelector('.circle--secs .circle__slice')
  const secsTotalHalf = 30

  if (!secsSliceNode) return

  if (currSecs > secsTotalHalf) {
    secsSliceNode.classList.add('circle__slice--morethanhalf')
  } else {
    secsSliceNode.classList.remove('circle__slice--morethanhalf')
  }

  const secsBarNode = document.querySelector('.circle--secs .circle__bar')
  const secsRotateDegrees = currSecs / 60 * 360
  if (secsBarNode) secsBarNode.style.transform = `rotate(${secsRotateDegrees}deg)`
}

const displayDate = () => {
  handleHours()
  handleMins()
  handleSecs()
}

setInterval(displayDate, 1000)
