export {};

type Comment = {
  id: string;
  content: string;
};

interface User {
  id: string;
  name: string;
  comment: Comment[];
}

/**
 * 아래 두 함수의 반환값에 올바른 타입 어노테이션을 붙여 보세요.
 */
const createUser = (): User => {
  return {
    id: "0",
    name: "0",
    comment: [],
  };
};

// 함수에 타입을 붙일때는 : User 로 붙인다
// : User 를 붙여야 좀더 함수 타입이 안정적이게 된다
function createUser2(): User {
  return {
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
}

createUser();
createUser2();
