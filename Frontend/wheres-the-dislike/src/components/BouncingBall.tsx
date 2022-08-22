import React from "react";
import {motion} from "framer-motion";
import {Refresh} from "@mui/icons-material";
import {Card, CardActions, CardContent, CardHeader, Grid} from "@mui/material";

const ballStyle = {
    display: "block",
    width: "5rem",
    height: "5rem",
    backgroundColor: "black",
    borderRadius: "0.5rem"
};

const bounceTransition = {
    y: {
        duration: 0.6,
        yoyo: Infinity,
        ease: "easeOut"
    },
    x: {
        duration: 1.5,
        yoyo: Infinity,
        ease: "linear"
    },
    backgroundColor: {
        duration: 0,
        yoyo: Infinity,
        ease: "easeOut",
        repeatDelay: 0.8
    }
};

export default function BouncingBall() {
    return (
        <Card sx={{
            maxWidth: 340,
            maxHeight: 350,
            minWidth: 340,
            minHeight: 350,
        }}>

            <CardHeader
                title="Sick animation"
                subheader={"Uses Framer framework"}
                subheaderTypographyProps={{variant: "subtitle2"}}
                sx={{
                    backgroundColor: "lightyellow",
                    textAlign: "left",
                }}>

            </CardHeader>

            <CardContent sx={{
                paddingTop: 0,
                minHeight: "400px",
                backgroundColor: "lightyellow",
                alignItems:"stretch",
            }}>
                <Grid>
                    <Grid item>
                        <motion.span
                            style={ballStyle}
                            transition={bounceTransition}
                            animate={{
                                y: ["220%", "-20%"],
                                x: ["-50%", "350%"],
                                backgroundColor: ["#ff6699", "#6666ff"]
                            }}
                        />
                    </Grid>
                </Grid>
            </CardContent>

        </Card>

    );
}