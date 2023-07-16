const NameInput = () => {
  return (
    <div className="mt-2">
      <input
        id="name"
        name="name"
        type="text"
        autoComplete="name"
        required
        className="credentialInput"
      />
    </div>
  )
}

export default NameInput