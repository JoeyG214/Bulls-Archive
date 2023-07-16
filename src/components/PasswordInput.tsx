type Props = {}

const PasswordInput = (props: Props) => {
  return (
    <div className="mt-2">
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        className="credentialInput"
      />
    </div>
  )
}

export default PasswordInput