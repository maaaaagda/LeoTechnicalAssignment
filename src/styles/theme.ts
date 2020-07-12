import { ThemedStyledProps } from "styled-components";

export const lightTheme: ThemedStyledProps<any, Theme> = {
    color: {
      primary:  "rgb(0, 0, 0)",
      secondary: "rgb(197, 202, 206)"
    },
    fontSize: {
      small: "1em",
      medium: "2em",
      large: "3em"
    },
    margin: {
        small: "10px",
        medium: "30px"
    },
    padding: {
        small: "3px"
    }
}

type Theme = {
  color: {
    primary: string,
    secondary: string
  },
  fontSize: {
    small: string,
    medium: string,
    large: string
  },
  margin: {
      small: string,
      medium: string
  },
  padding: {
      small: string
  }
}