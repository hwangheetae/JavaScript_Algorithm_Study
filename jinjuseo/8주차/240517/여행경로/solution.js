/*
- 공항 : 알파벳대문자3글자
- 공항수 : 3개이상 10000개 이하
- [a,b] : a->b
- 모두 사용해야함
- 가능한 경로 2개이상? 알파벳 순서순
*/
const solution = (tickets) => {
  const routes = [];
  const visited = Array(tickets.length).fill(false);

  const dfs = (start, route) => {
    if (route.length === tickets.length) {
      route.push(start);
      routes.push([...route]);
      route.pop();
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (!visited[i] && tickets[i][0] === start) {
        visited[i] = true;
        route.push(start);
        dfs(tickets[i][1], route);
        route.pop();
        visited[i] = false;
      }
    }
  };
  dfs("ICN", []);
  routes.sort(); // 사전순 정렬
  return routes[0];
};
