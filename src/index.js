import kthSmallest from 'kth-smallest'

function median(nums) {
  if (nums.length === 0) {
    return undefined
  }

  const middleIndex = Math.floor(nums.length / 2)
  const middleElementLeft = kthSmallest(nums, middleIndex)
  if (nums.length % 2 === 0) {
    const middleElementRight = kthSmallest(nums, middleIndex + 1)
    return (middleElementLeft + middleElementRight) / 2
  } else {
    return middleElementLeft
  }
}

module.exports = median
