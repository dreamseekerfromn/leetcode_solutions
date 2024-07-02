/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    /***************
        declare trie
     ***************/
    class trieNode {
        constructor(value = ""){
            this.children = new Map();
            this.value = value;
            this.endOfWord = false;
        }
    }

    class trie {
        constructor(value = ''){
            this.root = new trieNode(value);
        }

        insert(word){
            let node = this.root;
            for(let i = 0; i < word.length; i++){
                if(!node.children.has(word[i])){
                    node.children.set(word[i], new trieNode(word[i]));
                }
                node = node.children.get(word[i]);
            }

            node.endOfWord = true;
            return node;
        }

        search(word){
            let node = this.root;
            for(let i = 0; i < word.length; i++){
                if(!node.children.has(word[i])){
                    return false;
                }

                node = node.children.get(word[i]);
            }

            return node.endOfWord;
        }

        prefix(word){
            let node = this.root;
            for(let i = 0; i < word.length; i++){
                if(!node.children.has(word[i])){
                    return false;
                }

                node = node.children.get(word[i]);
            }

            return node.endOfWord && node.children;
        }
    }

    let trieDict = new trie();
    
    for(let i = 0; i < wordDict.length; i++){
        trieDict.insert(wordDict[i]);
    }

    let dp = new Array(s.length).fill(0);

    for(let i = 0; i < s.length; i++){
        let word = "";
        for(let j = i; j < s.length; j++){
            word += s[j];

            if(trieDict.prefix(word)){
                if(i == 0){
                    dp[j] = 1;
                }
                else {
                    dp[j] = dp[i - 1] || dp[j];
                }
            }
        }
    }

    return dp[s.length - 1];
};