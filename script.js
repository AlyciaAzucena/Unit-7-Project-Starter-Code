$("button").click(function() {
    let answerOne = $(".answerOne").val();
    console.log(answerOne);
    let answerTwo = $(".answerTwo").val();
    console.log(answerTwo);
    let answerThree = $(".answerThree").val();
    console.log(answerThree);
    let name = answerOne;
    let faveGenre = answerThree;
    let answer = (2050 - 2022) * answerTwo;

    let secondPicture = "https://media2.giphy.com/media/UDjF1zMreMld6/giphy.gif?cid=ecf05e47fbpdy5yqu3oapphojqfph72u192yuqryzk230xh3&rid=giphy.gif&ct=g";
    $(".fortune-display").append("<h1>" + name + ", your favorite movie genre, " + faveGenre + ", will be watched " + answer + " times by 2050" + "</h1>");
    $(".picture").attr("src", secondPicture);
});