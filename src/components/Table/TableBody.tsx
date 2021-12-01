import { ColumnDefinitionType } from "./TableTypes";

type TableBodyProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
};

const TableBody = <T, K extends keyof T>({
  data,
  columns,
}: TableBodyProps<T, K>): JSX.Element => {
  const rows = data.map((row, index) => {
    return (
      <tr key={`row-${index}`}>
        {columns.map((column, index2) => {
          return <td key={`cell-${index2}`}>{row[column.key]}</td>;
        })}
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default TableBody;
