import React from 'react';

interface LinkListProps {
    links: string[];
}

const LinkList: React.FC<LinkListProps> = ({ links }) => {
    return (
        <div style={{ maxHeight: '400px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
            <h2>listen</h2>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LinkList;