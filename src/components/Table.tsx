import React from "react";

import "./Table.scss";

interface TableProps {
  colour?: string;
}

const Table = (props: TableProps) => (
  <div>
    <table className="table">
      <thead>
        <tr>
          <th>Project</th>
          <th>Status</th>
          <th>Stars</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Collaborate</td>
          <td>Completed</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Newsletter</td>
          <td>Complete</td>
          <td>1</td>
        </tr>
        <tr className="active-row">
          <td>Doctor</td>
          <td>In progress</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Git Good</td>
          <td>In progress</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Better Python</td>
          <td>Not started</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Table;
