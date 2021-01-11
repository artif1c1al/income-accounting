import * as React from "react"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.667 9.667h6.666A3.333 3.333 0 0113.667 13a.667.667 0 01-1.33.078l-.007-.195a2 2 0 00-1.88-1.88L10.334 11H3.667a2 2 0 00-2 2 .667.667 0 11-1.334 0 3.333 3.333 0 013.19-3.33l.144-.003h6.666-6.666zM7 .333a4 4 0 110 8 4 4 0 010-8zm0 1.334A2.667 2.667 0 107 7a2.667 2.667 0 000-5.333z"
        fill="#000"
        fillOpacity={0.5}
      />
    </svg>
  )
}

export default SvgComponent
