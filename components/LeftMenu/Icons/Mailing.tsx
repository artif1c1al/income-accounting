import * as React from "react"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={14}
      height={10}
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 .2a2.4 2.4 0 012.4 2.4v4.8A2.4 2.4 0 0111 9.8H3A2.4 2.4 0 01.6 7.4V2.6A2.4 2.4 0 013 .2h8zm.8 2.64L7.527 6.402a.8.8 0 01-.976.06l-.078-.06L2.2 2.841V7.4a.8.8 0 00.8.8h8a.8.8 0 00.8-.8V2.84zM10.546 1.8H3.454L7 4.737 10.546 1.8z"
        fill="#000"
        fillOpacity={0.5}
      />
    </svg>
  )
}

export default SvgComponent
