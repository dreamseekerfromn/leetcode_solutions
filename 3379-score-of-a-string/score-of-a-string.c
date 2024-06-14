int scoreOfString(char* s) {
    int result = 0;
    int i = 1;
    int n = strlen(s);
    printf("%d\n", n);
    for(i; i < n; i++){
        int a = (int)(*(s + sizeof(char) * i));
        int b = (int)(*(s + sizeof(char) * (i - 1)));
        result += abs(a - b);
    }
    return result;
}