export default function Button({text, onClick}) {
  return(
    <>
    <button className='bg-gradient-to-r from-blue1 to-purple2 text-white font-extrabold text-2xl rounded-2xl w-1/6 p-2 mt-5 hover:bg-blue  focus:outline- focus:ring-1 focus:ring-sky focus:ring-opacity-50' onClick={onClick}>{text}</button>
    </>
  )
}