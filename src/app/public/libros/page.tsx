// 'use client'

import { ILibro } from '@/interfaces/ILibros';
import { getLibros } from '@/model/libros/datalibro';
import React from 'react';
import ColumnLibro from '@/interfaces/ILibros';
// import { Tabla } from "@/components/commons/Tabla/Tabla";
import { LibrosCardList } from "@/components/public/libros/LibrosCardList"

const Librospage = async () => {

  const libros: ILibro[] = await getLibros()
  return (
    <section className='flex flex-column items-center'>
      <h2 className='text-4xl m-8'>Seccion de libros</h2>
      {/* <Tabla
        rows={libros}
        coloumns={ColumnLibro}
        key='isbn' /> */}

      <LibrosCardList libros={libros} />
      {/* <Tabla rows={libros} columns={ColumnLibro} /> */}
      {/* <DataGrid libros={ColumnLibro} columns={libros}/> */}
    </section>
  )
}
export default Librospage