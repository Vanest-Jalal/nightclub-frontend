import Link from "next/link";

export default function Pagination( { currentPage}) {
    return (
        <nav className="h-34 flex items-center justify-center gap-3">
            
            <div className="w-20">
               {currentPage > 1 && (
                <Link href={`/events?page=${currentPage - 1}`}>
                    {"<"} Previous</Link>
            )} </div>
            
            <Link href="/events?page=1" className={currentPage === 1 ? "border-b-[0.5px] leading-none": ""}>1</Link>
            <Link href="/events?page=2" className={currentPage === 2 ? "border-b-[0.5px] leading-none": ""}>2</Link>
            <Link href="/events?page=3" className={currentPage === 3 ? "border-b-[0.5px] leading-none": ""}>3</Link>

             <div className="w-20">
            {currentPage < 3 && (
                <Link href={`/events?page=${currentPage + 1}`}>
                    Next {">"}</Link>
            )}
            </div>
             </nav>
    );
}
    