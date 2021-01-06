import SpaceMono from "./SpaceMono-Regular.ttf"
import SpaceMonoBold from "./SpaceMono-Bold.ttf"
import SpaceMonoItalic from "./SpaceMono-Italic.ttf"
import SpaceMonoBoldItalic from "./SpaceMono-BoldItalic.ttf"
import GreycliffBold from "./greycliffcf-bold-webfont.ttf"
import GreycliffMedium from "./greycliffcf-medium-webfont.ttf"

export default [
  {
    name: "SpaceMono",
    files: [SpaceMono],
    options: {
      fontStyle: "normal",
      fontWeight: "400",
      fontDisplay: "swap",
    },
  },
  {
    name: "SpaceMono",
    files: [SpaceMonoBold],
    options: {
      fontStyle: "normal",
      fontWeight: "700",
      fontDisplay: "swap",
    },
  },
  {
    name: "SpaceMono",
    files: [SpaceMonoItalic],
    options: {
      fontStyle: "italic",
      fontWeight: "400",
      fontDisplay: "swap",
    },
  },
  {
    name: "SpaceMono",
    files: [SpaceMonoBoldItalic],
    options: {
      fontStyle: "italic",
      fontWeight: "700",
      fontDisplay: "swap",
    },
  },
  {
    name: "Greycliff",
    files: [GreycliffBold],
    options: {
      fontStyle: "normal",
      fontWeight: "700",
      fontDisplay: "swap",
    },
  },
  {
    name: "Greycliff",
    files: [GreycliffMedium],
    options: {
      fontStyle: "normal",
      fontWeight: "500",
      fontDisplay: "swap",
    },
  },
]
