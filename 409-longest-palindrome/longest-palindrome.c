int longestPalindrome(char* s) {
    int *arr;
    int result = 0;
    int remaining = 0;

    arr = (int*) calloc(56, sizeof(int));

    int index = 0;
    
    while(*(s + sizeof(char) * index) != '\0'){
        //printf("%c", *(s + sizeof(char) * index));
        //printf("%d", *(s + sizeof(char) * index) - 'A');
        int value = (int)(*(s + sizeof(char) * index) - 'A');
        if(value > 25){
            value -= 6;
        }
        if(*(arr + value) == 1){
            *(arr + value) = 0;
            result += 2;
            remaining--;
        } else {
            *(arr + value) = 1;
            remaining++;
        }
        index++;
    }

    if(remaining >= 1){
        result++;
    }

    return result;
}