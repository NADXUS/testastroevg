const ButtonDefault = ({ children, className, ...props }) => (
    <button
        className={`bg-[#f9e988] text-green-800 hover:bg-[#b4d564] rounded-full px-6 py-3 font-semibold ${className}`}
        {...props}
    >
        {children}
    </button>
)
const ButtonShop = ({ children, className, ...props }) => (
    <button
        className={`bg-[#f9e988] text-green-800 hover:bg-[#b4d564] font-semibold rounded-full px-6 py-2 ${className}`}
        {...props}
    >
        {children}
    </button>
)

export { ButtonDefault, ButtonShop }