/**
 * 아래의 try ~ catch 문 안에서 타입 에러가 발생하고 있습니다.
 * 지금까지 배운 테크닉 중의 하나를 이용해서 에러를 해결해 보세요.
 * 키워드는 아래와 같습니다.
 * 1. any
 * 2. as
 * 3. instanceof
 */

try {
  // 중요한 일
} catch (e) {
  console.log(e.message);
}

try {
  // 중요한 일
} catch (e: any) {
  // 자스는 무엇이든 throw 할수있기때문에 에러는 항상 unknown
  console.log(e.message);
}
/* -------------------------------------------------------------------------- */
try {
  // 중요한 일
} catch (e) {
  // 에러가 나면 내가 책임진다
  const b = e as Error;
  // 하지만 . 뒤에서 에러 터질 확률 up
  console.log(b.message);
}
/* -------------------------------------------------------------------------- */
// 추천 : instanceof
try {
} catch (e) {
  if (e instanceof Error) {
    // 에러가 안남
    console.log(e.message);
  }
}
