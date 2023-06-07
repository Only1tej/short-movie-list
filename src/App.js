import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { Table } from "./components/Table";
import { Genres } from "./components/Genres";
// import { COLUMNS } from "./components/Columns";
import { ColumnFilter } from "./components/ColumnFilter";

import "./App.css";

function App() {
  // const columns = useMemo(() => COLUMNS, []);
  const COLUMNS = useMemo(
    () => [
      {
        Header: "TV Show",
        columns: [
          {
            Header: "Name",
            accessor: "show.name",
            Filter: ColumnFilter,
          },
          {
            Header: "Type",
            accessor: "show.type",
            Filter: ColumnFilter,
          },
        ],
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Language",
            accessor: "show.language",
            Filter: ColumnFilter,
          },
          {
            Header: "Genre(s)",
            accessor: "show.genres",
            Cell: ({ cell: { value } }) => <Genres values={value} />,
            Filter: ColumnFilter,
          },
          {
            Header: "Runtime",
            accessor: "show.runtime",
            Filter: ColumnFilter,
          },
          {
            Header: "Status",
            accessor: "show.status",
            Filter: ColumnFilter,
          },
        ],
      },
    ],
    []
  );

  // const result = useMemo(() => result, []);

  // const Genres = ({ values }) => {
  //   console.log("inside values of genre: ", values);
  //   return (
  //     <div>
  //       {values.map((genre, idx) => {
  //         return (
  //           <div key={idx} className="font-bold">
  //             {genre}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // };
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
    })();
  }, []);

  return (
    <div className="App">
      <Table columns={COLUMNS} data={data} />
    </div>
  );
}

export default App;
