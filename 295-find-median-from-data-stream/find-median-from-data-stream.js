/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {

    let left = 0;
    let right = this.arr.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (this.arr[mid] < num)
            left = mid + 1;
        else
            right = mid;
    }

    this.arr.splice(left, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {

    const n = this.arr.length;

    if (n % 2 === 1) {
        return this.arr[Math.floor(n / 2)];
    }

    return (this.arr[n / 2] + this.arr[n / 2 - 1]) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */