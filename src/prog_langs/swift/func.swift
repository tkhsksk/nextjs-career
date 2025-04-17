// 数字を与えると+1されて返ってくる関数add
func add(answer: Int) -> Int {
    return answer + 1
}

// 数字と文字を与えると、それぞれ配列で返してくれる関数addAndMsg
func addAndMsg(numbers: Int) -> (sum: Int, msg: String) {
    let added = numbers + 11
    let msg = "return!"

    return (added, msg)
}

// 数字の配列を与えると、最小最大をそれぞれ配列で返してくれる関数minAndMax
func minAndMax(nums: [Int]) -> (min: Int, max: Int) {
    var cMin = nums[0]
    var cMax = nums[0]

    for num in nums {
        if num < cMin {
            cMin = num
        } else if num > cMax {
            cMax = num
        }
    }

    return (cMin, cMax)
}

print(add(answer: 1))

print(addAndMsg(numbers: 1))
print(addAndMsg(numbers: 1).msg)

let nums = [1, 2, 3, 4, 5]
print(minAndMax(nums: nums).min)
print(minAndMax(nums: nums).max)