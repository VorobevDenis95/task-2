import { Grid } from "@mui/material";
import Todo, { PropsTodoItem,  } from "./Todo";

interface PropsList {
  list: PropsTodoItem['item'][];
}

const Todos = ({list}: PropsList) => {

  return (
    <>
    <Grid container spacing={4}>
      {list.map(el => (<Todo key={el.id} item={el}/>))}
    </Grid>
    </>
  )
}

export default Todos;