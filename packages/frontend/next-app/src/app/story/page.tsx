import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SprintTableHeader from "./SprintTableHeader";

export default function page() {
  return (
    <main className="mx-6">
      <section className="my-6" aria-labelledby="current-sprint-table">
        <SprintTableHeader />
        <Table>
          <TableCaption id="current-sprint-table">
            현재 진행중인 반복주기
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>스토리 타입</TableHead>
              <TableHead>내용</TableHead>
              <TableHead>포인트</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableHead>아이디</TableHead>
              <TableHead>내용</TableHead>
              <TableHead>포인트</TableHead>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <section aria-labelledby=""></section>
    </main>
  );
}
