int furthestDistanceFromOrigin(char * moves){
    int lodash = 0;
    int hor = 0;
    
    for(char *move = moves; *move != '\0'; *move++){
        if(*move == '_'){
            lodash++;
        } else if(*move == 'L'){
            hor--;
        } else if(*move == 'R'){
            hor++;
        }
    }

    int temp1 = abs(hor - lodash);
    int temp2 = abs(hor + lodash);

    return temp1 > temp2 ? temp1 : temp2;
}