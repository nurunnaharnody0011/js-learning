function calculateAiCost(tokensUsed) {
if(typeof tokensUsed !== "number" || tokensUsed<0){
    return "Invalid";
}
let freeToken = 500;
let tokenCharge=0;
let extraToken = tokensUsed - freeToken;
if(tokensUsed<=freeToken){
    return tokenCharge;
}
else if(tokensUsed>freeToken){
    tokenCharge = Math.floor(extraToken/100)*5;
    return tokenCharge;
}
}
