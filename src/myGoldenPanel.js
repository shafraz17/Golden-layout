import * as React from "react";
import { Table, Column, ColumnHeaderCell, Cell } from "@blueprintjs/table";
import { Card } from "@blueprintjs/core";

class Example extends React.PureComponent {
  render() {
    return <Card className="example-card">{this.props.children}</Card>;
  }
}

export class MyGoldenPanel extends React.Component {
  state = {
    value: this.props.value || "bla"
  };
  setValue = e => {
    this.setState({ value: e.target.value });
  };

  setContainerTitle = () => {
    this.props.glContainer.setTitle(this.state.value);
  };

  render() {
    const columnElems = Array(15)
      .fill(null)
      .map((v, i) => {
        return (
          <Column
            key={`column${i}`}
            id={i}
            columnHeaderCellRenderer={columnIndex => (
              <ColumnHeaderCell
                key={`columnHeader${columnIndex}`}
                index={i}
                name="test colummn"
              />
            )}
            cellRenderer={(rowIndex, columnIndex) => (
              <Cell
                key={`cell_${columnIndex}_${rowIndex}`}
                rowIndex={rowIndex}
                columnIndex={columnIndex}
              >
                test
              </Cell>
            )}
          />
        );
      });

    return (
      <div>
        <p>Test table</p>
        <Example>
          <Table numRows={5} enableGhostCells={true}>
            {columnElems}
          </Table>
        </Example>
      </div>
    );
  }
}
