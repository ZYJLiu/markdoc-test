import * as React from "react"

export function SideBySide({ children }) {
  const [first, second] = React.Children.toArray(children)

  return (
    <div className="side-by-side flex row">
      <div className="left">{first}</div>
      <div className="right">{second}</div>
      <style jsx>
        {`
          .side-by-side {
            width: 100%;
            padding: 0;
            margin-top: 1rem;
            border-radius: 4px;
            display: flex;
            flex-wrap: wrap;
          }
          .left {
            width: 50%;
            padding-right: 1rem;
            box-sizing: border-box;
          }
          .right {
            width: 50%;
            padding-left: 1rem;
            box-sizing: border-box;
          }
          .side-by-side :global(.heading) {
            margin: 0;
          }
          @media screen and (max-width: 1000px) {
            .left,
            .right {
              width: 100%;
              padding: 0;
            }
          }
        `}
      </style>
    </div>
  )
}
