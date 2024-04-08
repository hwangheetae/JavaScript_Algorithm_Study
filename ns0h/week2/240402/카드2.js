/*
백준
2164번 카드2

N장의 카드가 있다. 각각의 카드는 차례로 1부터 N까지의 번호가 붙어 있으며, 1번 카드가 제일 위에, N번 카드가 제일 아래인 상태로 순서대로 카드가 놓여 있다.
이제 다음과 같은 동작을 카드가 한 장 남을 때까지 반복하게 된다. 우선, 제일 위에 있는 카드를 바닥에 버린다. 그 다음, 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.
예를 들어 N=4인 경우를 생각해 보자. 카드는 제일 위에서부터 1234 의 순서로 놓여있다. 1을 버리면 234가 남는다. 여기서 2를 제일 아래로 옮기면 342가 된다.
3을 버리면 42가 되고, 4를 밑으로 옮기면 24가 된다. 마지막으로 2를 버리고 나면, 남는 카드는 4가 된다.
N이 주어졌을 때, 제일 마지막에 남게 되는 카드를 구하는 프로그램을 작성하시오.

첫째 줄에 정수 N(1 ≤ N ≤ 500,000)이 주어진다.

첫째 줄에 남게 되는 카드의 번호를 출력한다.
*/

const fs = require('fs');
let input = +(fs.readFileSync('ns0h/week2/240402/input.txt').toString());
// 코드 제출 시 let input = +(fs.readFileSync('/dev/stdin').toString());

function solution(input) {
    let array = Array.from({ length: input }, (_, index) => index + 1);
    let index = 0;

    while(index < array.length - 1){
        if(index % 2 === 0){
            index++;
        }
        else{
            array.push(array[index++]);
        }
    }

    return array[index];
}

console.log(solution(input));

/*
시간 초과로 인한 오답 처리가 계속해서 발생
shift를 사용해서는 시간 초과를 해결할 수 없음 -> 첫번째 원소를 shift가 아니라 건너뛰는 것으로 구현 -> 메모리 공간을 많이 차지하는 문제점이 있긴함
최적의 코드 => LinkedList로 구현

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// LinkedList 클래스 설정
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
        this.length++;

        return newNode;
    }

    getHead() { // 첫 노드(head) 가져오기
        return this.head.val;
    }

    removeHead() { // 첫 노드(head)를 연결리스트에서 지우기
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }

    getLength() { // 연결리스트의 길이 알기
        return this.length;
    }
}

const cards = new LinkedList();

for (let i = 1; i <= N; i++) {
    cards.push(i);
}

while (cards.getLength() !== 1) { // 길이가 0 이 아니라면.
    cards.removeHead(); // 맨 앞 노드를 지우고
    cards.push(cards.getHead()); // 맨 앞 노드를 맨뒤로 붙이고
    cards.removeHead(); // 다시 맨 앞 노드를 지우고
}
console.log(cards.getHead());
*/