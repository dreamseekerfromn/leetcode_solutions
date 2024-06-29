bool judgeCircle(char* moves) {
    int index = 0;
    int hor = 0;
    int ver = 0;

    while(*(moves + sizeof(char) * index) != '\0'){
        if(*(moves + sizeof(char) * index) == 'U'){
            ver++;
        }
        else if(*(moves + sizeof(char) * index) == 'D'){
            ver--;
        }
        else if(*(moves + sizeof(char) * index) == 'L'){
            hor--;
        }
        else if(*(moves + sizeof(char) * index) == 'R'){
            hor++;
        }

        index++;
    }

    return (hor == 0 && ver == 0) ? true : false;
}