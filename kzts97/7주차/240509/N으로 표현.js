function solution(N, number) {
    if (N === number) {
        return 1;
    }

    const S = Array.from({length: 8}, () => new Set());
    for (let i = 0; i < 8; i++) {
        S[i].add(Number(String(N).repeat(i + 1)));
    }

    for (let i = 1; i < 8; i++) {
        for (let j = 0; j < i; j++) {
            for (let op1 of S[j]) {
                for (let op2 of S[i - j - 1]) {
                    S[i].add(op1 + op2);
                    S[i].add(op1 - op2);
                    S[i].add(op1 * op2);
                    if (op2 !== 0) {
                        S[i].add(Math.floor(op1 / op2));
                    }
                }
            }
        }
        if (S[i].has(number)) {
            return i + 1;
        }
    }

    return -1;
}