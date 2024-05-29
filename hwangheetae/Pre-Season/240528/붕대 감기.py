def solution(bandage, health, attacks):
    bandage_time=bandage[0]
    heal_per_time=bandage[1]
    bonus_heal = bandage[2]
    default_health= health
    total_time = attacks[-1][0]
    heal_continue=-1
    damage_time= []
    damage_amount=[]
    
    for item in attacks:
        damage_time.append(item[0])
        damage_amount.append(item[1])
    
    j=0
    for i in range(total_time+1):
        if i == damage_time[j] :
            health-=damage_amount[j]
            j+=1

            heal_continue=0
            if health<=0:
                return -1
                
        else:
            health+=heal_per_time
            heal_continue+=1

            if heal_continue==bandage_time:
                health+=bonus_heal
                heal_continue=0
            
            if health>default_health:
                health=default_health
        print('time:', i )
        print(health)
        print('heal_continue:', heal_continue)
    return health
        
        
        