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
        d="M6.333 2.998L8 3.688l1.667-.69a4.353 4.353 0 013.333 0l1.248.516a.69.69 0 01.419.64v8.162c0 .38-.299.689-.667.689a.649.649 0 01-.248-.05l-.752-.31a4.353 4.353 0 00-3.333 0L8 13.332l-1.667-.689a4.353 4.353 0 00-3.333 0l-.752.311a.66.66 0 01-.867-.383.71.71 0 01-.048-.256V4.154a.69.69 0 01.42-.64L3 2.998a4.353 4.353 0 013.333 0zM3.51 4.231l-.842.348v6.764a5.686 5.686 0 014.176.07l.49.202v-6.76l-1.51-.624a3.02 3.02 0 00-2.314 0zm6.667 0l-1.51.623v6.76l.491-.202a5.686 5.686 0 014.176-.07V4.58l-.842-.348a3.02 3.02 0 00-2.315 0z"
        fill="#000"
        fillOpacity={0.5}
      />
    </svg>
  )
}

export default SvgComponent
