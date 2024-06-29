int furthestDistanceFromOrigin(char * moves){
    int lodash = 0;
    int hor = 0;

    for(char *move = moves; *move != '\0'; *move++){
        if(*move == '_'){
            lodash++;
        } else if(*move == 'L'){
            hor--;
        } else {
            hor++;
        }
    }

    return abs(hor) + lodash;
}