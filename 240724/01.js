// 1. let uninitialized;
console.log(uninitialized);
// 결과값 < undefined > uninitalized는 선언되었지만 초기화 되지 않아, undefined를 가집니다.

// 2. < const > apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
// const로 선언된 변수는 재할당이 불가하기 때문에 apple 변수의 데이터를 변경하려고 하면 오류메시지를 출력합니다.

// 3. let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// 배열[index]는 해당 배열의 해당 index값을 return합니다. 배열의 인덱스는 0부터 시작하기 때문에 lotto의 3번 인덱스는 19입니다.

// 4. let mySchedule = "";
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // < false >
// 먼저 빈 문자열인 mySchedule은 falsy한 값을 가집니다.
// or연산자는 양 변중 하나라도 true일 때 truthy한 값을 return하는데, mySchedule와 false 둘 다 falsy한 값이므로 false를 출력합니다.
// !는 bool 값을 반대로 바꿔주는 연산자입니다. 이때 falsy한 값이나 truthy한 값도 자바스크립트의 느슨한 특성에 의해 bool값으로 변하게 됩니다.
//mySchedule은 falsy하므로 !을 두번 사용하게 되면 falsy -> true -> false로 바뀌게 됩니다.
