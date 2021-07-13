var count = 0;  //전역 변수
for(var i=1; i<=100; i++){
    if(i % 4 === 0){
        document.write(i + ', ');  //3, 6
        count += 1;    //1, 2
    }
}
document.write('<br>');
document.write("<p>4의 배수의 개수 : " + count + "</p>");