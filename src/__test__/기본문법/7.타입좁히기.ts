export {};

/**
 * 변수 하나가 2개이상의 값을 가지는 경우는 아주 흔합니다
 * 서버에서 데이터를 선택적으로 내려주는 경우가 특히 그렇습니다.
 * 아래와 같은 코드는 자바스크립트에서 실수하기 좋은 패턴입니다.
 *
 * 문제)
 * 아래의 코드에서 타입스크립트 에러를 없애 보세요.
 */
const 함수 = (숫자?: number) => {
  // narrowing 값을 좁힌다.
  // 타스는 자스의 식을 모두 narrowing 으로 인정한다
  if (숫자) {
    return 숫자 + 1;
  }
  // 혹은
  if (typeof 숫자 === "number") {
    return 숫자 + 1;
  }
  // 혹은
  if (숫자배열 instanceof Array) {
    return 숫자배열.length + 1;
  }
};

/**
 * 타입스크립트 컴파일러는
 * 자바스크립트에서 에러를 막기 위해 사용해 왔던 테크닉을
 * 모두 Narrowing으로 인정합니다.
 */
const 함수1 = (숫자?: number) => {
  if (typeof 숫자 === "number") {
    return 숫자 + 1;
  }

  return 1;
};

/**
 * 자바스크립트에서 에러를 막기 위해 사용해 왔던 테크닉을
 * 모두 Narrowing으로 인정하므로
 * 검사하고자 하는 값이 객체라면
 * instanceof 연산자를 이용할 수도 있습니다.
 */
const 함수1 = (숫자배열?: number[]) => {
  if (숫자배열 instanceof Array) {
    return 숫자배열?.length;
  }

  return 0;
};
