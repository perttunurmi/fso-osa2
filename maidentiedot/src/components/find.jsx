const Find = ({ value, handleChange, text }) => {
  return (
    <>
      <label>{text} </label>
      <input type="text" value={value} onChange={handleChange} />
    </>
  )
}

export default Find
