int numberOfEmployeesWhoMetTarget(int* hours, int hoursSize, int target){
    int i = 0;
    int result = 0;

    for(i; i < hoursSize; i++){
        if(hours[i] >= target)
            result++;
    }

    return result;
}