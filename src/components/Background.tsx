type Props = {
  top: string,
  smTop: string,
  left: string,
  smLeft: string,
  rotate: string,
}

const Background = (props: Props) => {
  return (
    <div className={`backgroundGreenDiv ${props.top} ${props.smTop}`}>
      <div className={`backgroundGreen ${props.left} ${props.rotate} ${props.smLeft}`}></div>
    </div>
  )
}

export default Background