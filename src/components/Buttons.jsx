const ButtonDefault = ({ children, className, ...props }) => (
    <button
        className={`bg-[#f9e988] text-green-800 hover:bg-[#b4d564] rounded-full px-6 py-3 font-semibold animation-all duration-300 ${className}`}
        {...props}
    >
        {children}
    </button>
)
const ButtonShop = ({ children, className, ...props }) => (
    <a href="/shop">
        <button
            className={`bg-[#f9e988] text-green-800 hover:bg-[#b4d564] font-semibold rounded-full px-6 py-2 animation-all duration-300 ${className}`}
            {...props}
        >
            {children}
        </button>
    </a>
)

export { ButtonDefault, ButtonShop }