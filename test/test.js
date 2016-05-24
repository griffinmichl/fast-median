import test from 'tape'
import median from '../src/index'

test('median returns undefined for empty arrays', (t) => {
  t.plan(1)
  t.equal(median([]), undefined)
})

test('median returns only element in array of length 1', (t) => {
  t.plan(1)
  t.equal(median([1]), 1)
})

test('median does not mutate the original array', (t) => {
  t.plan(3)
  const nums1 = [2,3,1,5,4]
  const nums1Copy = [...nums1]
  median(nums1)
  t.ok(JSON.stringify(nums1Copy), JSON.stringify(nums1))

  const nums2 = [1,2,3,4,5]
  const nums2Copy = [...nums2]
  median(nums2)
  t.ok(JSON.stringify(nums2Copy), JSON.stringify(nums2))

  const nums3 = [5,4,3,2,1]
  const nums3Copy = [...nums3]
  median(nums3)
  t.ok(JSON.stringify(nums3Copy), JSON.stringify(nums3))
})

test('median finds the middle element in array with odd length', (t) => {
  t.plan(3)
  t.equal(median([1,2,3,4,5]), 3)
  t.equal(median([5,4,3,2,1]), 3)
  t.equal(median([1,5,4,2,3]), 3)
})

test('median finds the average of two middle elements in array with even length', (t) => {
  t.plan(3)
  t.equal(median([1,2,3,4]), 3.5)
  t.equal(median([4,3,2,1]), 3.5)
  t.equal(median([1,4,2,3]), 3.5)
})

