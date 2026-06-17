var combinationSum = function(candidates, target) {

    let result = [];

    function backtrack(index, current, sum) {

        if (sum === target) {
            result.push([...current]);
            return;
        }

        if (index >= candidates.length || sum > target) {
            return;
        }

        current.push(candidates[index]);
        backtrack(
            index,
            current,
            sum + candidates[index]
        );

        current.pop();

        backtrack(index + 1, current, sum);
    }

    backtrack(0, [], 0);

    return result;
};