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
        d="M2 1.333h5.333A2 2 0 019.22 2.667h3.447a2 2 0 011.996 1.882l.004.118V10a2 2 0 01-1.883 1.997l-.117.003H10a2 2 0 01-1.886-1.333H2.667V14a.667.667 0 11-1.334 0V2c0-.368.299-.667.667-.667zM9.333 4v6c0 .342.258.624.59.662l.077.005h2.667a.667.667 0 00.662-.59l.004-.077V4.667a.667.667 0 00-.589-.663L12.667 4H9.333zm-2-1.333H2.667v6.666H8v-6a.667.667 0 00-.589-.662l-.078-.004z"
        fill="#000"
        fillOpacity={0.5}
      />
    </svg>
  )
}

export default SvgComponent
