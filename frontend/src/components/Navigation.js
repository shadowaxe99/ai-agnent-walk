import React from 'react';
import Link from 'next/link';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/exploration">
                        <a>Exploration</a>
                    </Link>
                </li>
                <li>
                    <Link href="/quiz">
                        <a>Quiz</a>
                    </Link>
                </li>
                <li>
                    <Link href="/liveDemo">
                        <a>Live Demo</a>
                    </Link>
                </li>
                <li>
                    <Link href="/glossary">
                        <a>Glossary</a>
                    </Link>
                </li>
                <li>
                    <Link href="/resources">
                        <a>Resources</a>
                    </Link>
                </li>
                <li>
                    <Link href="/feedback">
                        <a>Feedback</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;