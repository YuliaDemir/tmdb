export const Loading = ({ text, size }: { text: string, size?: 'sm' }) => {
    return (
        <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/25 border-t-black" />
            {text}
        </>
    );
}   