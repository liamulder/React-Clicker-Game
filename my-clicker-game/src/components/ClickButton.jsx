export default function ClickButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full py-6 bg-blue-500 rounded-lg hover:bg-blue-600"
    >
      CLICK ME
    </button>
  )
}
