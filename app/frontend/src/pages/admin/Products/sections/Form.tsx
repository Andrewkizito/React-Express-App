//Importing helper modules
import { useEffect, useState } from "react";
import { partitionData } from "../../../../utils/modules";
import { Product } from "../../../../utils/types";

//Importing core modules
import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    TextField,
    Typography,
} from "@mui/material";

export const Form = (props: { expanded: boolean, setOpen: Function }) => {
    return (
        <Accordion  sx={{bgcolor: "#0b132b"}} expanded={props.expanded} onChange={() => props.setOpen((prevState: boolean) => !prevState)}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Creat New Product</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Product Name" fullWidth sx={{color: "#fff"}}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Description" fullWidth sx={{color: "#fff"}} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Details" multiline={true} minRows={9} fullWidth sx={{color: "#fff"}}/>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

export default Form
