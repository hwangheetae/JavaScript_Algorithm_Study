/*
백준
28279번 덱 2

정수를 저장하는 덱을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 여덟 가지이다.

1 X: 정수 X를 덱의 앞에 넣는다. (1 ≤ X ≤ 100,000)
2 X: 정수 X를 덱의 뒤에 넣는다. (1 ≤ X ≤ 100,000)
3: 덱에 정수가 있다면 맨 앞의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
4: 덱에 정수가 있다면 맨 뒤의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
5: 덱에 들어있는 정수의 개수를 출력한다.
6: 덱이 비어있으면 1, 아니면 0을 출력한다.
7: 덱에 정수가 있다면 맨 앞의 정수를 출력한다. 없다면 -1을 대신 출력한다.
8: 덱에 정수가 있다면 맨 뒤의 정수를 출력한다. 없다면 -1을 대신 출력한다.

첫째 줄에 명령의 수 N이 주어진다. (1 ≤ N ≤ 1,000,000)
둘째 줄부터 N개 줄에 명령이 하나씩 주어진다.
출력을 요구하는 명령은 하나 이상 주어진다.
*/

const fs = require('fs');
let input = fs.readFileSync('ns0h/week2/240404/input.txt').toString().split('\n');
// 코드 제출 시 let input = fs.readFileSync('/dev/stdin').toString().split('\n');

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
}
  
class Deque {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    addFront(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } 
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size++;
    }

    addRear(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } 
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    removeFront() {
        if (this.isEmpty()) {
            return '-1';
        }

        const removedValue = this.head.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } 
        else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.size--;
        return removedValue;
    }

    removeRear() {
        if (this.isEmpty()) {
            return '-1';
        }

        const removedValue = this.tail.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } 
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.size--;
        return removedValue;
    }

    printFirst() {
        if (this.isEmpty()) {
            return '-1';
        }

        return this.head.value;
    }

    printLast() {
        if (this.isEmpty()) {
            return '-1';
        }

        return this.tail.value;
    }
}

function solution(input) {
    const deque = new Deque();
    const answer = [];
    
    for(let i = 1; i < +input[0] + 1; i++){
        if(input[i].trim().length > 1){
            let array = input[i].trim().split(' ');
            if(array[0] === '1'){        // 1 X: 정수 X를 덱의 앞에 넣는다. (1 ≤ X ≤ 100,000)
                deque.addFront(+array[1])
            }
            else if(array[0] === '2'){   // 2 X: 정수 X를 덱의 뒤에 넣는다. (1 ≤ X ≤ 100,000)
                deque.addRear(+array[1])
            }
        }
        else if(input[i].trim().length === 1){
            switch(input[i].trim()){
                case '3':               // 3: 덱에 정수가 있다면 맨 앞의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
                    answer.push(deque.removeFront());
                    // console.log(deque.removeFront());
                    break;
                case '4':               // 4: 덱에 정수가 있다면 맨 뒤의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
                    answer.push(deque.removeRear());
                    // console.log(deque.removeRear());
                    break;
                case '5':               // 5: 덱에 들어있는 정수의 개수를 출력한다.
                    answer.push(deque.size);
                    // console.log(deque.size);
                    break;
                case '6':               // 6: 덱이 비어있으면 1, 아니면 0을 출력한다.
                    answer.push(deque.isEmpty() ? '1' : '0');
                    // console.log(deque.isEmpty() ? '1' : '0');
                    break;
                case '7':               // 7: 덱에 정수가 있다면 맨 앞의 정수를 출력한다. 없다면 -1을 대신 출력한다.
                    answer.push(deque.printFirst());
                    // console.log(deque.printFirst());
                    break;
                case '8':               // 8: 덱에 정수가 있다면 맨 뒤의 정수를 출력한다. 없다면 -1을 대신 출력한다.
                    answer.push(deque.printLast());
                    // console.log(deque.printLast());
                    break;
            }
        }
    }

    console.log(answer.join('\n'));
}

solution(input);

/*
시간 초과로 인한 오답 처리가 계속해서 발생
shift와 unshift를 사용해서는 시간 초과를 해결할 수 없음
addFront, removeFront 함수로 구현했으나 그래도 시간 초과됨
그래서 LinkedList로 구현 -> 또 시간 초과
"출력을 요구하는 명령이 주어질 때마다 명령의 결과를 한 줄에 하나씩 출력한다." 요구 사항 무시하고 한번에 출력했더니 성공
*/