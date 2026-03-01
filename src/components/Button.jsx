export default function Button({ children, onClick, disabled, variant = 'primary', ...props }) {
  const base = 'px-5 py-2.5 text-sm font-medium rounded-lg transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 disabled:hover:bg-indigo-600',
    outline: 'border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:hover:bg-transparent',
  };

  return (
    <button
      className={`${base} ${variants[variant]}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
