import * as React from "react"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={18}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 18c1.261 0 2.285-1.007 2.285-2.25h-4.57C5.715 16.993 6.74 18 8 18zm7.693-5.263c-.69-.73-1.982-1.828-1.982-5.425 0-2.731-1.945-4.918-4.569-5.454v-.733C9.142.504 8.631 0 8 0c-.63 0-1.142.504-1.142 1.125v.733c-2.624.536-4.57 2.723-4.57 5.454 0 3.597-1.29 4.695-1.98 5.425-.215.226-.31.498-.308.763a1.135 1.135 0 001.146 1.125h13.708c.682 0 1.142-.548 1.146-1.125a1.088 1.088 0 00-.307-.763z"
        fill="#000"
        fillOpacity={0.2}
      />
    </svg>
  )
}

export default SvgComponent
