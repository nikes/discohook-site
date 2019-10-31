import "@testing-library/jest-dom/extend-expect"
import { render as _render, RenderOptions } from "@testing-library/react"
import { ThemeProvider } from "emotion-theming"
import React, { ReactElement, ReactNode } from "react"
import { darkTheme, Theme } from "./themes"

export * from "@testing-library/react"

const ContextWrapper = (props: { children?: ReactNode }) => (
  <ThemeProvider<Theme>
    theme={{
      ...darkTheme,
      color: "dark",
      display: "cozy",
      mobile: false,
    }}
  >
    {props.children}
  </ThemeProvider>
)

export const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">,
) => _render(ui, { wrapper: ContextWrapper, ...options })