import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  faIR,
} from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "شناسه", width: 90 },
  { field: "first_name", headerName: "نام", width: 150, editable: true },
  {
    field: "last_name",
    headerName: "نام خانوادگی",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "سن",
    type: "number",
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, first_name: "نیما", last_name: "نیمایی", age: 25 },
  { id: 2, first_name: "نیما", last_name: "نیمایی", age: 25 },
  { id: 3, first_name: "نیما", last_name: "نیمایی", age: 25 },
  { id: 4, first_name: "نیما", last_name: "نیمایی", age: 25 },
  { id: 5, first_name: "نیما", last_name: "نیمایی", age: 25 },
  { id: 6, first_name: "نیما", last_name: "نیمایی", age: 25 },
  { id: 7, first_name: "نیما", last_name: "نیمایی", age: 25 },
  { id: 8, first_name: "نیما", last_name: "نیمایی", age: 25 },
];

const ExportToolbar = () => (
  <GridToolbarContainer>
    <GridToolbarExport />
  </GridToolbarContainer>
);

const XDataGrid = () => {
  return (
    <DataGrid
      slots={{
        toolbar: ExportToolbar,
      }}
      localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
      columns={columns}
      rows={rows}
      checkboxSelection
    />
  );
};

export default XDataGrid;
