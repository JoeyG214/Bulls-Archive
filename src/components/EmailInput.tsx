const EmailInput = () => {
  return (
    <div className="mt-2">
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="credentialInput"
      />
    </div>
  )
}

export default EmailInput