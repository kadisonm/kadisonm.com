"use client"

import Link from 'next/link'

export default function Header() {
    return (
        <div className="header">
            <div className="left">
                <span>
                    <div className="subtitle">The Hub</div>
                    <div className="title">Kadison McLellan</div>
                </span>
                
                <Link className="header-button" href="/">Home</Link>
                <Link className="header-button" href="/web-apps">Apps</Link>    
                <Link className="header-button" href="/blogs">Blogs</Link>    
            </div>
        </div>
    );
}
  