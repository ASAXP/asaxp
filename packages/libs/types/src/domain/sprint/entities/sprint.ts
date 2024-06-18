export type Sprint = {
  id: number;
  // 스프린트 이름
  name: string;
  // 100자 정도로 스프린트 설명
  description: string;
  // 스프린트 주기
  cycle: number;
  // 시작일
  beginDate: Date;
  // 종료일
  endDate: Date;
};
