import * as React from "react"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={1}
      height={43}
      viewBox="0 0 1 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#000" fillOpacity={0.1} d="M0 0h1v43H0z" />
    </svg>
  )
}

export default SvgComponent
