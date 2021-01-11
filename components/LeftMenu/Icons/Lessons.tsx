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
        d="M10.333.333c.368 0 .667.299.667.667v.667h.667a2 2 0 012 2v8a2 2 0 01-2 2H2.333a2 2 0 01-2-2v-8a2 2 0 012-2H3V1a.667.667 0 011.333 0v.667h5.334V1c0-.368.298-.667.666-.667zm2 6.667H1.667v4.667c0 .368.298.666.666.666h9.334a.667.667 0 00.666-.666V7zm-2 1.333c.368 0 .667.299.667.667v1.333a.667.667 0 01-.667.667H9a.667.667 0 01-.667-.667V9c0-.368.299-.667.667-.667h1.333zM3 3h-.667a.667.667 0 00-.666.667v2h10.666v-2A.667.667 0 0011.667 3H11v.667a.667.667 0 01-1.333 0V3H4.333v.667a.667.667 0 01-1.333 0V3z"
        fill="#000"
        fillOpacity={0.5}
      />
    </svg>
  )
}

export default SvgComponent
