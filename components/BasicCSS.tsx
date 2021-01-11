export default function BasicCSS() {
  return (
    <style jsx global> {`
      * {
        margin: 0;
        padding: 0;
        font-font: 'Jost';
      }

      body {
      }

      .period-buttons * + * {
        margin-left: 10px;
      }
    `}</style>
  )
}