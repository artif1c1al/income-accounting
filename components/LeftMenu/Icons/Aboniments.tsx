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
        d="M12.667 2.667a2 2 0 012 2V6a.667.667 0 01-.667.667 1.333 1.333 0 00-.1 2.663l.178.008c.331.038.589.32.589.662v1.333a2 2 0 01-2 2H3.333a2 2 0 01-2-2V10c0-.342.258-.624.59-.662l.176-.008A1.333 1.333 0 002 6.667.667.667 0 011.333 6V4.667a2 2 0 012-2h9.334zM8.667 4H3.333a.667.667 0 00-.666.667v.75a2.668 2.668 0 010 5.166v.75c0 .368.298.667.666.667h5.334v-.667a.667.667 0 111.333 0V12h2.667a.667.667 0 00.666-.667v-.75a2.668 2.668 0 01-.126-5.13l.126-.036v-.75A.667.667 0 0012.667 4H10v.667a.667.667 0 01-1.333 0V4zm.666 2.667c.368 0 .667.298.667.666v1.334a.667.667 0 01-1.333 0V7.333c0-.368.298-.666.666-.666z"
        fill="#000"
        fillOpacity={0.5}
      />
    </svg>
  )
}

export default SvgComponent

