function apartmentHunting(blocks,reqs){
    var reward={};
    var block=1;
    var nearestBlockReward=-1;
    var nearestBlock;
    for(let i of blocks){
        reward[block]=0
        
        for( let j of reqs){
            if(i[j]==true)
            {
                reward[block]=reward[block]+1;
            }
        }
        if(nearestBlockReward<reward[block])
        {
            nearestBlockReward=reward[block];
            nearestBlock=block
        }
        block++;
    }
    if(nearestBlockReward==0){
        for(let i of blocks){
            block=1
            for(let[b,k]of Object.entries(i))
            {
                if(k==true)
                {
                    reward[block]=reward[block]+1;

                }
            }
            if(nearestBlockReward<reward[block])
            {
                nearestBlockReward=reward[block];
                nearestBlock=block
            }
            block++
        }
    }
    return nearestBlock;

}

exports.apartmentHunting=apartmentHunting;