/**
 * 
 */
let divobj1 = document.querySelector(".mybox");
let divobj2 = document.querySelector("#mydiv");

let divobj3 = document.getElementsByClassName("mybox")[0];
let divobj4 = document.getElementById("mydiv");

console.log(divobj1);
console.log(divobj2);
console.log("======================");
console.log(divobj3);
console.log(divobj4);

//dom객체에 이벤트 연결하기
//divobj1.addEventListener(이벤트명, 함수);
//마우스 클릭 이벤트가 발생되면 익명의 함수가 실행된다.
divobj1.addEventListener("click" , ()=>{
	//alert("이벤트가 발생됨");
	divobj1.style.backgroundColor = "red";
	divobj1.style.color = "blue";
	//엘리먼트에 클래스를 여러 단계로 정의하기 위해 사용
	divobj1.classList.add("active");
	console.log("======================");
	console.log(divobj1.classList.contains("active"));
	divobj1.classList.remove('active');
	console.log(divobj1.classList.contains("active"));
	console.log(divobj1.textContent); //getter
	console.log(divobj2.textContent); //getter
	console.log(divobj3.textContent); //getter
	console.log(divobj4.textContent); //getter
	
	divobj1.textContent = "hello dom"; //setter
	console.log("======================");
});







