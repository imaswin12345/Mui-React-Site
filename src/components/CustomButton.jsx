import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";

function CustomButton({
  variant = "primary",
  backgroundColor,
  color,
  buttonText,
  fullWidth = false,
  onClick,
}) {
  const StyledButton = styled(Button)(({ theme }) => {
    const variants = {
      primary: {
        backgroundColor: backgroundColor || "#1976d2",
        color: color || "#fff",
        "&:hover": {
          backgroundColor: color || "#115293",
          color: backgroundColor || "#fff",
          borderColor: backgroundColor || "#115293",
        },
      },
      success: {
        backgroundColor: backgroundColor || "#2e7d32",
        color: color || "#fff",
        "&:hover": {
          backgroundColor: color || "#1b5e20",
          color: backgroundColor || "#fff",
          borderColor: backgroundColor || "#1b5e20",
        },
      },
      danger: {
        backgroundColor: backgroundColor || "#d32f2f",
        color: color || "#fff",
        "&:hover": {
          backgroundColor: color || "#9a0007",
          color: backgroundColor || "#fff",
          borderColor: backgroundColor || "#9a0007",
        },
      },
    };

    return {
      fontWeight: 700,
      fontSize: "14px",
      cursor: "pointer",
      padding: "0.5rem 1.25rem",
      borderRadius: "7px",
      textTransform: "none",
      display: "block",
      border: "2px solid transparent",
      ...(variants[variant] || variants.primary),
      [theme.breakpoints.down("md")]: {
        width: fullWidth ? "90%" : "auto",
        margin: fullWidth ? theme.spacing(0, "auto", 3, "auto") : "initial",
      },
      [theme.breakpoints.down("sm")]: {
        width: fullWidth ? "90%" : "auto",
        marginTop: fullWidth ? theme.spacing(3) : "initial",
      },
    };
  });

  return (
    <StyledButton onClick={onClick}> 
      {buttonText}
    </StyledButton>
  );
}

export default CustomButton;
