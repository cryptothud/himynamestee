import { motion } from "framer-motion"

export const Layout = ({ children, className }: { children: any, className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col items-center w-[1700px] max-w-[90vw] mx-auto ${className ?? ""}`}
        >
            {children}
        </motion.div>
    )
}