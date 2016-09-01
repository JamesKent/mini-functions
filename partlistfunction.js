
//This function takes in an array and spits it out the same order in pairs and sets.
function partlist(arr) {
    var newArray;
    var returnArray=[];
    for( var i=1; i<arr.length; i++){
      newArray = [];
      newArray.push(arr.slice(0,i).join(" "));
      newArray.push(arr.slice(i).join(" "));
      returnArray.push(newArray);
    }

    return returnArray;
}



//test function
function testing(actual, expected) {
    Test.assertSimilar(actual, expected);
}

Test.describe("partlist",function() {
  Test.it("1st Basic tests", function() {
    testing(partlist(["I", "wish", "I", "hadn't", "come"]),
        [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])
    testing(partlist(["cdIw", "tzIy", "xDu", "rThG"]),
        [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])
    testing(partlist(["vJQ", "anj", "mQDq", "sOZ"]),
        [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])
  })
})
