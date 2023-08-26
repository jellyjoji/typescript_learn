export {};

/**
 * 문제)
 * 아래의 타입은 복잡한 배열을 표현하고 있습니다.
 * 타입의 에러를 수정해 보세요.
 */

type Comment = {
  id: string;
  content: string;
};

interface User {
  id: string;
  name: string;
  comment: Comment[];
  //   아래 comment 가 []배열 안에 들어있으므로 []배열이 들어가야한다
  //   comment: Array<Comment>;
}

const 사용자: User = {
  id: "아이디",
  name: "이름",
  comment: [
    {
      id: "1",
      content: "나나나",
    },
    {
      id: "2",
      content: "나나나",
    },
  ],
};
