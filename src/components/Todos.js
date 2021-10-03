import Todo from './Todo'
import React from 'react'
import {Consumer}from '../context'
export default function Todos() {
    return (
        <Consumer>{value=>{
        const {todos} = value
        return todos.map(t=><Todo todo={t} key = {t.id}></Todo>)
        }}</Consumer>
        
    )
}
