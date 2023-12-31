export {};
/**
 * 유니온 타입(union type)은 한번에 2개 이상의 타입을 허용하는 타입입니다.
 * 타입과 타입은 버티컬 바 | 로 구분합니다.
 */

/**
 * 아래의 변수에 적절한 값을 대입해 보세요.
 */
// const a: number | string = [];
const a: number | string = 0;
// const b: { a: number } | { b: string } = {};
const b: { a: number } | { b: string } = { b: "r" };

/**
 * 문제)
 * 아래의 타입은 사용자의 계정을 표현합니다.
 * 사용자 타입을 수정해서 에러가 나지 않게 바꾸어 보세요.
 */

type 사용자 = {
  id: string;
  //   역활: "슈퍼" | "어드민" ;
  역활: "슈퍼" | "어드민" | "게스트";
};

const 나: 사용자 = {
  id: "유니크",
  역활: "게스트",
};
