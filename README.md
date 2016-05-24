## fast-median
Find median element in an arary of numbers

Uses a randomized quickselect to achieve O(n) average case time complexity

[![Build Status](https://travis-ci.org/gm758/fast-median.svg?branch=master)](https://travis-ci.org/gm758/fast-median)

## Install
```bash
$ npm install fast-median
```

## Usage
```js
import median from 'fast-median'

median([10, 20, 30, 40])
// 25

median([10, 20, 30, 40, 50])
// 30

median([1])
// 1

```

## API
```js
median :: number a => [a] -> a

median(numbers)
```

__Arguments__
* `numbers` - An array of numbers

