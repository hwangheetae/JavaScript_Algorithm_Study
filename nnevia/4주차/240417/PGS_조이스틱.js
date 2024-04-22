//  1차 구현 (테케 일부 통과)
//  def stick(init, name):
//      cnt = 0
//      for i in range(len(init)):
//          print(cnt)
//          if ord(name[i]) > 77:
//              flag = -1
//          else:
//              flag = 1
//          while init[i] != name[i]:
//              if flag == -1:
//                  if init[i] == 'A':
//                      init[i] = 'Z'
//                  else:
//                      init[i] = chr(ord(init[i]) - 1)
//              else:
//                  init[i] = chr(ord(init[i]) + 1)
//              cnt += 1
        
//          if init == name:
//              return cnt
        
//          cnt += 1
        
//      return cnt
//  def solution(name):
//      right, left = ['A']*len(name), ['A']*len(name)

//      answer = min(stick(right, name), stick(left, name[0]+name[:0:-1]))
//      return answer


//  2차 풀이 (구글)
function solution(name) {
    let answer = 0;
    let minMove = name.length - 1;
    
    for (let i = 0; i < name.length; i++) {
        answer += Math.min(name.charCodeAt(i) - 'A'.charCodeAt(0), 'Z'.charCodeAt(0) - name.charCodeAt(i) + 1);
        
        let next = i + 1;
        while (next < name.length && name[next] === 'A') {
            next++;
        }
        
        minMove = Math.min(minMove, 2 * i + name.length - next, i + 2 * (name.length - next));
    }
    
    answer += minMove;
    return answer;
}