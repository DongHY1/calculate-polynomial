import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
export default function FormTable(props) {
  return (
    <Table 
    aria-label="Example table with solutions"
  >
    <TableHeader>
      {props.parameters.map((_, index) => (
        <TableColumn key={index}>{`参数 ${index + 1}`}</TableColumn>
      ))}
    </TableHeader>
    <TableBody emptyContent={"无数据"}>
      {props.solutions.map((solution, index) => (
        <TableRow key={index}>
          {solution.map((value, i) => (
            <TableCell key={i}>{value}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
  )
}
