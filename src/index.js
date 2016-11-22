import kthSmallest from 'kth-smallest'
import isNumber from 'is-number'

function median(nums, noForceCheck) {
  if (!noForceCheck) {
    if (!Array.isArray(nums)) {
      throw new TypeError(`nums should be array, got ${typeof nums}`)
    }

    if (!nums.every(isNumber)) {
      throw new TypeError('nums array must contain only numbers')
    }

    if (nums.length === 0) {
      return undefined
    }
  }


  const middleIndex = Math.floor(nums.length / 2)
  const middleElementRight = kthSmallest(nums, middleIndex)
  if (nums.length % 2 === 0) {
    const middleElementLeft = kthSmallest(nums, middleIndex - 1)
    return (middleElementLeft + middleElementRight) / 2
  } else {
    return middleElementRight
  }
}

module.exports = median
