import { Grid } from "@mui/material"

interface PropsTodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

interface PropsTodoItem {
  item: PropsTodo
}

const Todo = ({item}: PropsTodoItem) => {


  return (
    <Grid item xs={12} md={4}>
      <div>{item.title}</div>
      <input type="checkbox" defaultChecked={item.completed} 
      disabled
      />
    </Grid>
  )
}

export default Todo;
export type {PropsTodo, PropsTodoItem}