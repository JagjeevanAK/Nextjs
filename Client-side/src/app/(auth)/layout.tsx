export default function ({children}:Readonly<{children:React.ReactNode}>){
    return (
        <>
            <div className="text-center border-b">
                20% off for next 3 days
            </div>
            {children}
        </>
    )
} 