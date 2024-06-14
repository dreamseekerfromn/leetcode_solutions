int comp(const void *a, const void *b){
    return (*(int *)a - *(int *)b);
}
int minIncrementForUnique(int* nums, int numsSize) {
    int result = 0;
    qsort(nums, numsSize, sizeof(int), comp);
    int i = 1;
    for(i; i < numsSize; i++){
        if(nums[i] > nums[i - 1]){
            continue;
        }
        else if(nums[i] == nums[i - 1]){
            nums[i]++;
            result++;
        } else {
            int temp = abs(nums[i] - nums[i - 1]);
            result += temp + 1;
            nums[i] += temp + 1;
        }
    }

    return result;
}