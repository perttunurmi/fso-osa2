const Kielet = ({ kielet }) => {
  const lista = Object.keys(kielet).map(kieli =>
    <li key={kieli}>{kielet[kieli]}</li>
  )

  return (
    <ul>
      {lista}
    </ul>
  )
}

export default Kielet
