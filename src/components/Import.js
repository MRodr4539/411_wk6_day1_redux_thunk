import React from 'react'
import {Button, Table, TableHead, TableBody, TableRow, TableCell, Container } from "@material-ui/core"
import { MoreVert } from '@material-ui/icons'
import DeleteIcon from '@material-ui/icons/Delete';

const Import = (props) => {
    // fill out this component

    return (
        <div>
      <p>Import Component</p>
        <Button variant='contained' color='primary' onClick={props.fetchMakes}>
           Import
        </Button>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Make</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.makes.map(row => (
                    <TableRow key={row.name}>
                        <TableCell>{row['MakeId']}</TableCell>
                        <TableCell>{row['MakeName']}</TableCell>
                        <TableCell>
                          <DeleteIcon onClick={() => props.deleteMakes(index)}>
                          </DeleteIcon>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        
        </div>
      
    )
}

export default Import