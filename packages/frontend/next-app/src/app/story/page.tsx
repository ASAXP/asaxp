import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import api from "@/api/api";
import { Story } from "@libs/types";
import SprintTableHeader from "./SprintTableHeader";
import StoryRow from "./StoryRow";

export default async function page() {
  const result = await api.get<Story[]>("http://localhost:8080/story");
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
            {result.map((story) => {
              return (
                <TableRow key={story.id}>
                  <TableHead>{story.type}</TableHead>
                  <TableHead>{story.description}</TableHead>
                  <TableHead>{story.point}</TableHead>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </section>
      <section className="grid gap-12 my-20">
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
