const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function getModifiedScores(scores) {
    // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
    return scores.map((score) => score + 3);
}

console.log(getModifiedScores(scores));
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]
