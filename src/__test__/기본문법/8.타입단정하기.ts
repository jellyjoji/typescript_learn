export {};

/**
 * 변수 하나의 타입이 2개 이상일 가능성이 있을때,
 * Narrowing 으로 값을 좁히는 것이 가장 이상적이지만
 * 개발자의 재량으로 타입을 단정지을 수도 있습니다.
 * 이것을 Assertion 이라고 합니다.
 * 특히 타입스크립트로 dom을 다룰 때 유용하게 사용할 수 있습니다.
 */

/**
 * 13번 째 줄의 오른쪽에 아래의 키워드를 복사/붙여넣기 해 보세요.
 *  as HTMLDivElement
 */
const root = document.getElementById("#root");
// root 가 없을수도 있어서 타스는 경고를 준다
root.innerText = "리액트";
// 그래서 narrowing
if (root) {
  root.innterText = "리액트";
}
// 를 쓰거나
// as HTMLDivElement 를 붙여서 강제한다

/**
 * 특정 변수가 null이 아님을 단정하기만 한다면 ! 를 사용할 수도 있습니다.
 * 13번 째 줄의 오른쪽에 ! 를 추가해 보세요.
 *
 * Type Assertion은 타입스크립트의 타입 추론을 사용하지 않고 개발자가 직접 정의하기 때문에 지양하고 조건문을 사용하는게 좋다.
 */

// ! : not null Assertion
const root1 = document.getElementById("#root")!;
root1.innerText = "리액트";
