//유니온 파인드

function solution(n, computers) {
  let parent = Array.from({ length: n }, (_, index) => index); // 각 노드의 부모를 자기 자신으로 초기화

  // Find 함수: 노드 x의 루트 노드를 찾는다
  function find(x) {
    if (parent[x] === x) return x;
    return (parent[x] = find(parent[x]));
  }

  // Union 함수: 노드 x와 노드 y를 연결한다
  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) parent[rootY] = rootX; // 루트가 다르면 하나의 루트로 합친다
  }

  // 모든 컴퓨터를 순회하며 연결된 컴퓨터들을 합친다
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (computers[i][j] === 1) {
        union(i, j);
      }
    }
  }

  // 각 노드가 자기 자신을 가리키는 경우만 카운트 (즉, 루트 노드인 경우)
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (find(i) === i) answer++;
  }

  return answer;
}

//코드 설명
// let parent = Array.from({ length: n }, (_, index) => index);

// Array.from()
// 유사 배열 객체나 반복가능한 객체로부터 새 Array 인스턴스를 만듬

// 첫번째 인자는 새 배열을 생성하기 위한 데이터 소스, 두번째 인자는 맵함수: 배열의 각 요소를 어떻게 처리할지 정의

// {lenght: n}
// Array.from()의 첫번째 인자
// length 속성만 포함하는 객체를 전달, length 속성값 만큼의 길이를 갖는 배열을 생성
// 길이가 n 인 배열 생성

// (_, index ) => index
// Array.from()의 두번째 인자두개의 매개변수를 가짐
// 첫번째는 현재 처리 주인 요소의 값( 여기서는 사용되지 않고 '_' 로 표시)
// 두번째 는 현재 요소의 인덱스
// 각 배열 요소의 값을 =그 요소의 인덱스로 설정
// 배열의 첫번째 요소는 0, 두번쨰 요소는 1..

// dfs
function solution(n, computers) {
  //변수 초기화
  // VISITED: 길이 n의 배열로 각 컴퓨터의 방문상태를 추적. 처음에는 모든 컴퓨터를 방문하지 않은
  //false로 초기화
  //answer: 네트웤의 총 수를 저장하는 변수로 , 초기값은 '0'
  let visited = new Array(n).fill(false);
  let answer = 0;

  //dfs 함수 정의
  //함수는 컴퓨터 i를 시작점으로 하여 깊이 우선 탐색을 수행
  //방문한 컴퓨터는 visited[i]를 true 로 설정하여 중복 방문을 방지
  function dfs(i) {
    visited[i] = true;
    // for 루프를 통해 모든 컴퓨터를 순회하며, 'coumputers[i][j]가 '1' 이고 visited[j]
    // 가 false 일 경우 , i와 j가 연결되어 있고, j가 방문되지 않았으면
    //dfs(j)를 호출하여 j 와 연결된 다른 컴퓨터도 탐색
    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1 && !visited[j]) {
        dfs(j);
      }
    }
  }
  //전체 컴퓨터 대상 dfs 실행
  //   for 루프를 사용하여 모든 컴퓨터 i 에 대해 반복

  for (let i = 0; i < n; i++) {
    // 만약 visited[i]가 false면 dfs(i)를 호출하여 i와 연결된 모든 컴퓨터를 방문.
    // i 가 새로운 네트워크의 시작점을 의미
    //dfs 가 호출된ㄷ 이후 asnwer +1 을 해줌. 새로운 네트워크 발견!!
    // 최종 결과 answer를 반환
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
}

///BFS
function solution(n, computers) {
  let visited = new Array(n).fill(false);
  let answer = 0;

  function bfs(start) {
    let queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
      let node = queue.shift();
      for (let i = 0; i < n; i++) {
        if (computers[node][i] === 1 && !visited[i]) {
          visited[i] = true;
          queue.push(i);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
      answer++;
    }
  }
  return answer;
}

//why bfs?
// / 모든 연결요소를 레벨별로 탐색가능
