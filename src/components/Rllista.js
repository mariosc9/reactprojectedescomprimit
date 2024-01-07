import React from "react";

export function Rllista(props) {
  //   de forma iterativa
  //   let r = [];
  //     for (let item of props.data){
  //         r.push(
  //         <tr>
  //             <td>{item}</td>
  //         </tr>
  //         )
  //     }
  //     return <table>
  //         {r}
  //     </table>

  return (
    <table>
      <thead>
        <tr>
          {props.header.map((item) => (
            <th>{item.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <tr>
            {props.header.map((hitem) => {
              return item.hasOwnProperty(hitem.name) ? (
                <td>{item[hitem.name]}</td>
              ) : (
                <td></td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
