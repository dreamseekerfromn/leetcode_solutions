int comp(const void *a, const void *b){
    return ( *(int*)a - *(int*)b );
}

int minMovesToSeat(int* seats, int seatsSize, int* students, int studentsSize) {
    qsort(seats, seatsSize, sizeof(int), comp);
    qsort(students, seatsSize, sizeof(int), comp);
    int result = 0;
    for(int i = 0; i < seatsSize; i++){
        result += abs(seats[i] - students[i]);
    }

    return result;
}