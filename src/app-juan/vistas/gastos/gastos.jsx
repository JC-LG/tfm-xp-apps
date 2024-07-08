import './gastos.css'
import Navegacion from "../../componentes/navegacion/navegacion.jsx";
import React from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

function Gastos() {

    const columnas = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'cargo',
            headerName: 'Cargo',
            width: 150,
            editable: true,
        },
        {
            field: 'cantidad',
            headerName: 'Cantidad',
            width: 150,
            editable: true,
        },
        {
            field: 'concepto',
            headerName: 'Concepto',
            sortable: false,
            width: 360,
            valueGetter: (value, row) => `${row.cargo || ''} compro ${row.cantidad || ''}`,
        },
    ];

    const filas = [
        { id: 1, cargo: 'Equipo IT', concepto: 'Juan', cantidad: 14 },
        { id: 2, cargo: 'Licencias de Software', concepto: 'Luis', cantidad: 31 },
        { id: 3, cargo: 'Redes de IT', concepto: 'Jaime', cantidad: 31 },
    ];

  return (
      <>
          <Navegacion />
          <h1>Gastos</h1>
          <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                  rows={filas}
                  columns={columnas}
                  initialState={{
                      pagination: {
                          paginationModel: {
                              pageSize: 5,
                          },
                      },
                  }}
                  pageSizeOptions={[5]}
                  checkboxSelection
                  disableRowSelectionOnClick
              />
          </Box>
      </>
  )
}

export default Gastos
