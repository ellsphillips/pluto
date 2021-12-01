import { ColumnDefinitionType } from "./TableTypes";

export interface ProjectRecord {
  name: string;
  status: string;
  stars: number;
}

export const exampleTableData: ProjectRecord[] = [
  {
    name: "Collaborate",
    status: "Completed",
    stars: 1,
  },
  {
    name: "Newsletter",
    status: "Complete",
    stars: 1,
  },
  {
    name: "Doctor",
    status: "In progress",
    stars: 4,
  },
  {
    name: "Git Good",
    status: "In progress",
    stars: 1,
  },
  {
    name: "Better Python",
    status: "Not started",
    stars: 0,
  },
];

export const exampleTableColumns: ColumnDefinitionType<
  ProjectRecord,
  keyof ProjectRecord
>[] = [
  {
    key: "name",
    header: "Project name",
    width: 150,
  },
  {
    key: "status",
    header: "Current status",
  },
  {
    key: "stars",
    header: "Repo stars",
  },
];
