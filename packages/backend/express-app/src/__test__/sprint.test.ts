import { parseSprint } from "../domain/sprint/entities/sprint.parse";
describe("asa", () => {
  it("should be true", () => {
    const sprintMock = {
      id: 0,
      name: "john",
      description: "test_description",
      cycle: 21,
      beginDate: new Date(),
      endDate: new Date(),
    };
    expect(parseSprint(sprintMock)).toBe(sprintMock);
  });
});
