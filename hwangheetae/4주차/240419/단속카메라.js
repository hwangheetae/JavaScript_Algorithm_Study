//차량의 경로를 각 차량의 진출 지점을 기준으로 오름차순 정렬합니다.
//순차적으로 차량의 경로를 검토하면서, 현재 차량이 아직 카메라에 포착되지 않았다면 해당 차량의 진출 지점에 카메라를 설치합니다.
//설치한 카메라 위치를 기준으로 이 지점 또는 이 지점 이전에 진입하는 모든 차량들이 카메라에 포착됩니다.

function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  let cameras = 0;
  let lastCamera = -Infinity;

  for (let i = 0; i < routes.length; i++) {
    if (routes[i][0] > lastCamera) {
      lastCamera = routes[i][1];
      cameras++;
    }
  }
  console.log(routes);
  return cameras;
}
