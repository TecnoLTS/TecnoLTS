'use client';

interface EmailLinkProps {
    email: string;
    className?: string;
}

export default function EmailLink({ email, className }: EmailLinkProps) {
    return (
        <a
            href={`mailto:${email}`}
            className={`${className} text-left border-none bg-transparent p-0 cursor-pointer outline-none hover:text-cyan-400 transition-colors border-b border-gray-700 hover:border-cyan-400 pb-0.5`}
            title="Click to send an email"
        >
            {email}
        </a>
    );
}
