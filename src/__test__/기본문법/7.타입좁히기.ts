export {};

/**
 * 변수 하나가 2개이상의 값을 가지는 경우는 아주 흔합니다
 * 서버에서 데이터를 선택적으로 내려주는 경우가 특히 그렇습니다.
 * 아래와 같은 코드는 자바스크립트에서 실수하기 좋은 패턴입니다.
 *
 * 문제)
 * 아래의 코드에서 타입스크립트 에러를 없애 보세요.
 * ? 를 사용하면 안 됩니다.
 */
const 함수 = (숫자배열?: number[]) => {
  if (숫자배열 instanceof Array) {
    return 숫자배열.length + 1;
  }

  return 1;
};
