import { fetch } from "cross-fetch";

type Comment = {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
};

/**
 * 타입스크립트 에러를 해결해 보세요
 */

// 방법 1.
// : Promise<Comment> 함수 뒤에 타입어노테이션을 붙이는 방법은 고급
export const getCommentList = async (): Promise<Comment> => {
  const res = await fetch("https://dummyjson.com/comments");
  const data = await res.json();

  return data;
};

getCommentList().then(console.log);
/* -------------------------------------------------------------------------- */

// 방법 2.
// 추천 : 좀더 쉬운 방법은 추론을 유도
export const getCommentList2 = async () => {
  const res = await fetch("https://dummyjson.com/comments");
  const data: Comment = await res.json();

  return data;
};

getCommentList2().then(console.log);

/* -------------------------------------------------------------------------- */

// 방법 3.
// 비추 : 아예 결과물에 타입을 지정
export const getCommentList3 = async () => {
  const res = await fetch("https://dummyjson.com/comments");
  const data = await res.json();

  // 에러가 나면 내가 다 책임질테니 나만 믿으라구
  return data as Comment;
};

getCommentList3().then(console.log);
