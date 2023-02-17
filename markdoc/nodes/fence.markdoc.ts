import { nodes } from "@markdoc/markdoc"
import { CodeBlock } from "../../components"

export const fence = {
  render: CodeBlock,
  attributes: {
    language: nodes.fence.attributes.language,
    lineNumbers: {
      type: String,
    },
  },
}
