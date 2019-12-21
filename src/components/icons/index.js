import React from "react"

import IconXing from "./xing"
import IconLinkedIn from "./linkedin"
import IconMedium from "./medium"
import IconGitHub from "./github"
import IconBehance from "./behance"

// Utility function to grab Icons by name
export default name => {
  switch (name.toLowerCase()) {
    case "xing":
      return <IconXing />
    case "linkedin":
      return <IconLinkedIn />
    case "medium":
      return <IconMedium />
    case "github":
      return <IconGitHub />
    case "behance":
      return <IconBehance />
    default:
      return null
  }
}
