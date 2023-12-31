export {};
/**
 * 제네릭(generics)이란?
 * 호출하는 시점에 타입을 결정하는 기능입니다.
 * 제네릭 : 호출할때 주는 값으로 타입을 설정하는것. 대충퉁침
 */

/**
 * 자바스크립트의 배열은 타입이 다른 요소가 들어있는 배열의 타입도 추론을 합니다.
 * 변수이름 위에 마우스를 올려서 확인해 보세요.
 */
const 숫자배열 = [1, 2, 3];
const 문자열배열 = ["1", "2", "3"];

/**
 * 이것은 타입스크립트에서 자바스크립트의 배열을 제네릭으로 선언했기 때문입니다.
 * 제네릭 함수는 호출하는 시점에 타입을 결정합니다.
 * 그래서 배열은 아래와 같이 선언할 수도 있습니다.
 * 제네릭 함수는 타입을 파라미터로 받습니다.
 * 타입은 꺽쇠로 감싸서 넘깁니다.
 */

// Array:배열인데 <number>:문자열이다
// 나중에 결과로 인해 결정되는 타입을 <> 안에 넣는것이다
// <제네릭> 지금 당장 결정할수가 없어 나중에 결정하기위해
const 숫자배열1: Array<number> = [1, 2, 3];
const 숫자배열2: number[] = [1, 2, 3];
const 문자열배열1: Array<string> = ["1", "2", "3"];
const 문자열배열2: string[] = ["1", "2", "3"];

/**
 * 인터페이스도 제네릭으로 선언할 수 있습니다.
 * 이 인터페이스는 서버의 리스폰스를 표현합니다.
 */

// <나중에 결정될 타입>
// T 는 매개변수처럼 쓸수있다. 뭐가들어올지는 모르지만 나중에 결정할게.
// T=대충퉁침
interface 서버리스폰스<T> {
  data: T;
  code: number;
}

/**
 * 타입도 제네릭으로 선언할 수 있습니다.
 */
type 서버리스폰스1<T> = {
  data: T;
  code: number;
};

/**
 * 문제)
 * 아래 타입의 에러를 고치세요.
 */
const 성공: 서버리스폰스<T> = {
  data: "데이터",
  code: 200,
};

// <매개변수> 가 스트링이 들어올때, 뭐가올지 몰라서 선언해놓은 <T> 가 스트링이 된다.
const 성공1: 서버리스폰스1<number> = {
  data: "데이터",
  code: 200,
};

/**
 * 제네릭 함수를 선언할 때는 괄호() 앞에 꺽쇠<>를 표기합니다.
 * 꺽쇠 안에 가상의 타입을 넣습니다. T를 넣는 것이 관례이지만 아무것이나 넣어도 됩니다.
 * 함수를 호출하는 시점에 괄호() 안으로 들어오는 값의 타입이 T가 됩니다.
 * 함수를 호출하는 코드 위에 마우스를 올려서 호출하신 시점에 타입이 결정되는 것을 확인해 보세요.
 */

// 들어오는 값에 따라서, 값이 들어오면 결정되게 하겠다.
// T 는 number 라는것을 추론해서 반영시켜준다 : 제네릭
const 뒤집기함수 = <T>(배열: T[]) => {
  return 배열.reverse();
};
console.log(뒤집기함수([1, 2, 3]));
console.log(뒤집기함수(["1", "2", "3"]));

/**
 * 제네릭 함수는 extends 키워드로 제약조건을 걸 수 있습니다.
 * 아래의 제네릭 함수에는 length 라는 프로퍼티를 가진 객체만 들어갈 수 있습니다.
 *
 */
// extends 는 제약조건이다
// extends 를 삼항연산자처럼 쓴다. 객체를 받기는하는데 { length: number } 가 올때만 허용하겠다는 뜻이다.
const 갯수세기 = <T extends { length: number }>(객체: T) => {
  return 객체.length;
};

console.log(갯수세기("123"));
console.log(갯수세기([1, 2, 3]));
console.log(갯수세기(1)); //extends 제약에 의해 비허용
console.log(갯수세기({ length: 0, 0: 1 })); //extends 제약에 의해 허용

/**
 * 문자열과 배열은 대표적인 ArrayLike 객체입니다.
 * ArrayLike 는 length 프로퍼티를 가지는 객체를 가리키는 약속입니다.
 * 타입스크립트는 자바스크립트 문서에만 존재하던 약속들을 타입으로 명시하고 있습니다.
 * 타입스크립트에서는 ArrayLike 도 타입이므로 변수처럼 사용할 수 있습니다.
 */
const 갯수세기1 = <T>(객체: ArrayLike<T>) => {
  return 객체.length;
};
console.log(갯수세기1("123"));
console.log(갯수세기1([1, 2, 3]));
// console.log(갯수세기(1)); 부합

/**
 * 문제)
 * { a: string } 라는 프로퍼티를 포함(extends)하는 객체만 허용하는 제네릭 함수<T>를 선언해 보세요.
 */
const 함수 = <대충퉁침 extends { a: string }>(객체: 대충퉁침) => {
  // TODO: 함수 구현
};
// const 함수 = <T extends { a : string }>(객체 : T) => {
//     return 객체;
// }

함수({ a: "", b: 0 });
