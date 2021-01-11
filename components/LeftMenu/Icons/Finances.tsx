import * as React from "react"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 1.333a4 4 0 01.15 7.998l-.15.002H7.667v1.334h2.666a.667.667 0 010 1.333H7.667v2a.667.667 0 01-1.334 0v-2H3.667a.667.667 0 010-1.333h2.666V9.333H3.667a.667.667 0 01-.078-1.329L3.667 8h2.666V2c0-.368.299-.667.667-.667h4zm0 1.334H7.667V8H11a2.667 2.667 0 00.133-5.33L11 2.667z"
        fill="#000"
        fillOpacity={0.5}
      />
    </svg>
  )
}

export default SvgComponent
