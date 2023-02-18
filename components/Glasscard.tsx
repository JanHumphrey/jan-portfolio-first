
type Props = {
  children: React.ReactNode,
  padding: string,
}

const Glasscard = (props: Props) => {
  return (

    // <div className={`rounded-3xl h-72 border-2 bg-gradient-to-l from-gray-400 to-white opacity-20`} >
    <div className="border-1 border-white rounded-lg">
      <div className={`bg-gradient-to-tr from-white to-gray-400 p-20 w-11 border-2 rounded-lg shadow-md backdrop-filter backdrop-blur-lg opacity-50`}>
        {props.children}
      </div>
    </div>
  )
}

export default Glasscard