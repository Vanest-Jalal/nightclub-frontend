import Link from "next/link";

export default async function Pagination( { currentPage}) {
    return (
        <div className="pagination">
            <Link href="/events?page=1" className="pagination__link">1</Link>
            <Link href="/events?page=2" className="pagination__link">2</Link>
            <Link href="/events?page=3" className="pagination__link">3</Link>
            {currentPage < 3 && (
                <Link href={`/events?page=${currentPage + 1}`} className="pagination__link">næste</Link>
            )}
            {currentPage > 1 && (
                <Link href={`/events?page=${currentPage - 1}`} className="pagination__link">forrige</Link>
            )}
        </div>
    );
}
    