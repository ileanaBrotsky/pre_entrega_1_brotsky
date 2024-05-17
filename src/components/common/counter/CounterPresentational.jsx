import { Button, Box } from "@mui/material";

const CounterPresentacional = ({ restar, sumar, counter, onAdd }) => {
  return (
    <>
    <div style={{ marginBottom: "20px", display: "flex" }}>
      <Button onClick={restar} variant="outlined">
        -
      </Button>
      <Box
      height={10}
      width={20}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ backgroundColor: 'lightgrey' }}
    >
     {counter}
    </Box>
      <Button onClick={sumar} variant="outlined">
       +
      </Button>
      </div>
      <div>
      <Button onClick={() => onAdd(counter)} color="success" variant="contained">
        Agregar al carrito
      </Button>
      </div>
      </>
    
  );
};

export default CounterPresentacional;