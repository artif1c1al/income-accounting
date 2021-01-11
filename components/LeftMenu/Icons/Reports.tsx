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
        d="M11.667.333a2 2 0 012 2v9.334a2 2 0 01-2 2H2.333a2 2 0 01-2-2V2.333a2 2 0 012-2h9.334zm0 1.334H2.333a.667.667 0 00-.666.666v9.334c0 .368.298.666.666.666h9.334a.667.667 0 00.666-.666V2.333a.667.667 0 00-.666-.666zM4.333 8.333c.369 0 .667.299.667.667v1.333a.667.667 0 11-1.333 0V9c0-.368.298-.667.666-.667zM7 3c.368 0 .667.298.667.667v6.666a.667.667 0 11-1.334 0V3.667C6.333 3.298 6.632 3 7 3zm2.667 2.667c.368 0 .666.298.666.666v4a.667.667 0 11-1.333 0v-4c0-.368.298-.666.667-.666z"
        fill="#000"
        fillOpacity={0.5}
      />
    </svg>
  )
}

export default SvgComponent
