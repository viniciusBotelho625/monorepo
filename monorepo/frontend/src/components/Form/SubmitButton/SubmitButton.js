function SubmitButton({ text, icon: Icon, className }) {
  return (
    <button
      type="submit"
      className={`${className} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2`}
    >
      {text}
      {Icon && <Icon size={18} />}
    </button>
  );
}

export default SubmitButton;