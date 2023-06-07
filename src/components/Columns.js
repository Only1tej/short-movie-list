import { Genres } from "./components/Genres";
import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
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
        accessor: "show,type",
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
        Cell: ({ cell: { value } }) => {
          const hour = Math.floor(value / 60);
          const min = Math.floor(value % 60);
          return (
            <>
              {hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""}` : ""}
              {min > 0 ? `${min} min ${min > 1 ? "s" : ""}` : ""}
            </>
          );
        },
        Filter: ColumnFilter,
      },
      {
        Header: "Status",
        accessor: "show.status",
        Filter: ColumnFilter,
      },
    ],
  },
];
