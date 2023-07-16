type Props = {
  top: string,
  smTop: string,
  left: string,
  smLeft: string,
  rotate: string,
}

const Background = (props: Props) => {
  return (
    <div className={`absolute inset-x-0 ${props.top} -z-10 transform-gpu overflow-hidden blur-3xl ${props.smTop}`}>
      <div className={`relative ${props.left} aspect-[1155/678] w-[36.125rem] -translate-x-1/2 ${props.rotate} bg-gradient-to-tr from-[#9eff80] to-[#41fd24] opacity-30 ${props.smLeft} sm:w-[72.1875rem]`}></div>
    </div>
  )
}

export default Background