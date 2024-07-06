int passThePillow(int n, int time) {
    int index = 1;
    int direction = 1;
    for(;time > 0; time--){
        index += direction;

        if(index == n || index == 1){
            direction = direction * -1;
        }
    }
    return index;
}