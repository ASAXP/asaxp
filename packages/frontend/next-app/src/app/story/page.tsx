import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SprintTableHeader from "./SprintTableHeader";
import StoryRow from "./StoryRow";

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
      <section className="grid gap-12 my-20" aria-labelledby="">
        <StoryRow
          storyId={0}
          description="dskj"
          storyPoint={2}
          checked={false}
        />
        <StoryRow
          storyId={0}
          description="dskj"
          storyPoint={2}
          checked={false}
        />
        <StoryRow
          storyId={0}
          description="dskj"
          storyPoint={2}
          checked={false}
        />
        <StoryRow
          storyId={0}
          description="dskj"
          storyPoint={2}
          checked={false}
        />
      </section>
    </main>
  );
}
