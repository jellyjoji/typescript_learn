export {};
/**
 * 타입 집합에서 일부 타입을 선택적으로 받을 수 있습니다.
 * 타입 어노테이션 앞에 ? 를 붙이면 선택사항이 됩니다.
 * 아래의 타입은 문자열 프로퍼티를 선택적으로 받는 객체를 표현합니다.
 */
type A = {
  숫자: number;
  문자열?: string;
};

/**
 * 위 표현은 아래의 표현과 비슷합니다.
 */
type A1 = {
  숫자: number;
  문자열: string | undefined;
};

let a: A = { 숫자: 0 };
a = { 숫자: 0 };
a = { 숫자: 0, 문자열: "" };

/**
 * 선택적으로 매개변수를 받는 함수를 표현할 수도 있습니다.
 */
const 함수 = (a: number, b?: string) => {
  console.log(a, b);
};

/**
 * 위 표현은 아래의 표현과 비슷합니다.
 */
const 함수1 = (a: number, b: string | undefined) => {
  console.log(a, b);
};

// 방어 코드를 줄일 수 있습니다.
함수(1);
함수(1, "");
함수(1, "0");

/**
 * 문제)
 * 아래의 더하기 함수에는 b라는 프로퍼티가 필요하지 않습니다.
 * b라는 프로퍼티를 넘기지 않아도 에러가 나지 않게 바꾸어 보세요.
 */
type 매개변수타입 = {
  a: number;
  b?: number;
};

const 더하기 = (객체: 매개변수타입) => {
  return 객체.a;
};

더하기({ a: 0, b: 0 });
