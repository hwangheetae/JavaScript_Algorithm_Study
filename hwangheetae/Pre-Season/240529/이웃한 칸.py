def solution(board, h, w):
    n= len(board)
    count =0
    # 우 하 상 좌
    dh = [0, 1, -1, 0]
    dw = [1, 0, 0, -1]
    
    for i in range(4):
        h_check = h+dh[i]
        w_check =w+dw[i]
        if h_check >=0 and h_check<n and  w_check >=0 and w_check<n:
            if board[h][w] == board[h_check][w_check]:
                count+=1
                
    return count