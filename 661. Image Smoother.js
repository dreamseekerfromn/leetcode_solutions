/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    let result = Array(img.length).fill([]);
    for(let i = 0; i < img.length; i++){
        result[i] = Array(img[0].length).fill(0);
    }

    for(let i = 0; i < img.length; i++){
        for(let j = 0; j < img[0].length; j++){
            let sum = 0;
            let count = 0;
            sum += img[i][j];
            count++;
            if(j - 1 >= 0){
                sum += img[i][j-1];
                count++;
            }
            if(j + 1 < img[0].length){
                sum += img[i][j+1];
                count++;
            }
            if(i - 1 >= 0){
                sum+= img[i-1][j];
                count++;
                if(j - 1 >= 0){
                    sum += img[i-1][j-1];
                    count++;
                }
                if(j + 1 < img[0].length){
                    sum += img[i-1][j+1];
                    count++;
                }
            }
            if(i + 1 < img.length){
                sum+= img[i+1][j];
                count++;
                if(j - 1 >= 0){
                    sum += img[i+1][j-1];
                    count++;
                }
                if(j + 1 < img[0].length){
                    sum += img[i+1][j+1];
                    count++;
                }
            }
            let avg = Math.floor(sum/count);
            
            result[i][j] = avg;
        }
    }

    return result;
};
