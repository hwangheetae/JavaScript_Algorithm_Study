//전체 GPT 참고
// 파이썬 풀이(dfs)
def solution(numbers, target):
    n = len(numbers)
    answer = 0

    def dfs(index, current_sum):
        nonlocal answer
        # 모든 숫자를 사용했을 때, target과 같은지 확인
        if index == n:
            if current_sum == target:
                answer += 1
            return
        
        # 현재 숫자를 더하거나 빼면서 다음 단계로 재귀 호출
        dfs(index + 1, current_sum + numbers[index])
        dfs(index + 1, current_sum - numbers[index])

    # 초기 호출
    dfs(0, 0)
    return answer

# 테스트 케이스 실행
print(solution([1, 1, 1, 1, 1], 3))  # 예상 출력: 5
print(solution([4, 1, 2, 1], 4))  # 예상 출력: 2

//파이썬 풀이(bfs)
from collections import deque


def solution(numbers, target):
    answer = 0
    queue= deque()
    n= len(numbers)
    queue.append([numbers[0], 0])
    queue.append([-1*numbers[0],0])
    while queue:
        temp,idx= queue.popleft()
        idx +=1
        if idx<n:
            queue.append([temp+numbers[idx], idx])
            queue.append([temp-numbers[idx], idx])
        else:
            if temp == target:
                answer +=1
    return answer


//JS 풀이

function solution(numbers, target) {
    const n = numbers.length
    let answer =0
    
    function dfs(index,current_sum){
        if(index ===n){
            if(current_sum === target){
                answer+=1
            }
            return
        }
        dfs(index+1, current_sum + numbers[index])
        dfs(index+1,current_sum-numbers[index])     
    }
    dfs(0,0)
    return answer
}