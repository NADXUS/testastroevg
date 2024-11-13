
const CardShop = ({ children, className, ...props }) => (
    <div className={`bg-white rounded-[15px] shadow-lg overflow-hidden  ${className}`} {...props}>
        {children}
    </div>
)

export { CardShop }