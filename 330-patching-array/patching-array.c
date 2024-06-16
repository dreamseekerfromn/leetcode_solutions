int minPatches(int* nums, int numsSize, int n) {
    int i = 0;  //bc it has to b started in 1, not 0;
    long int result = 0;
    long int min = 1;

    while(min <= n){
        if(i < numsSize && nums[i] <= min){
            min += nums[i];
            i++;
        } else {
            min += min;
            result++;
        }
    }
    return result;
}