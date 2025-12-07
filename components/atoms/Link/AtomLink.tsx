import { Link } from '@heroui/react';
import { AtomLinkProps } from './AtomLink.types';

const AtomLink = ({href, children}: AtomLinkProps) => {
    return (
        <Link 
            href={href}
        >
            {children}
        </Link>
    )
}

export default AtomLink;