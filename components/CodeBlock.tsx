import Prism from "prismjs"
import copy from "copy-to-clipboard"
import * as React from "react"
import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/plugins/line-highlight/prism-line-highlight.js"
import "prismjs/plugins/line-highlight/prism-line-highlight.css"

export function CodeBlock({
  children,
  "data-language": language,
  lineNumbers = "",
}) {
  console.log("test", lineNumbers)

  const [copied, setCopied] = React.useState(false)

  const ref = React.useRef(null)

  React.useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current, false)
  }, [children])

  React.useEffect(() => {
    if (copied) {
      copy(ref.current.innerText)
      const to = setTimeout(setCopied, 1000, false)
      return () => clearTimeout(to)
    }
  }, [copied])

  const lines =
    typeof children === "string" ? children.split("\n").filter(Boolean) : []

  const dataLine =
    typeof window === "undefined"
      ? `data-line="${lineNumbers}"`
      : "data-line=''"
  return (
    <div className="code" aria-live="polite">
      <pre
        className={`language-${language} line-numbers`}
        // data-line causes nextjs hydration error
        // data-line={lineNumbers}
      >
        <code ref={ref}>{children}</code>
      </pre>
      <button onClick={() => setCopied(true)}>
        <span>{copied ? "Copied!" : "Copy"}</span>
      </button>
      <style jsx>
        {`
          .code {
            position: relative;
          }
          .code button {
            appearance: none;
            position: absolute;
            color: inherit;
            background: var(--code-background);
            top: ${lines.length === 1 ? "17px" : "13px"};
            right: 11px;
            border-radius: 4px;
            border: none;
            font-size: 15px;
          }
          /* Override Prism styles */
          .code :global(pre[class*="language-"]) {
            text-shadow: none;
            border-radius: 4px;
          }
        `}
      </style>
    </div>
  )
}
