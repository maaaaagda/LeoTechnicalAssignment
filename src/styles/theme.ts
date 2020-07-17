import { ThemedStyledProps } from "styled-components";

export const lightTheme: ThemedStyledProps<any, Theme> = {
    color: {
      primary:  "rgb(0, 0, 0)",
      secondary: "rgb(197, 202, 206)",
      background: "white"
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

export const fancyTheme: ThemedStyledProps<any, Theme> = {
  color: {
    primary:  "rgb(128,128,128)",
    secondary: "rgb(0, 0, 0)",
    background: "lightblue"
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
    secondary: string,
    background: string
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