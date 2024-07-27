int maxProfit(int* prices, int pricesSize) {
    int buy = 0;
    int sell = 1;
    int maxP = 0;
    while(sell < pricesSize){
        if(prices[buy] < prices[sell]){
            maxP = (prices[sell] - prices[buy]) > maxP ? (prices[sell] - prices[buy]) : maxP;
        } else {
            buy = sell;
        }
        sell++;
    }
    return maxP;
}