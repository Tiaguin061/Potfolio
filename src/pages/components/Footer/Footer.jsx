import React from 'react';
import './footer.css'

const date = new Date();

const year = date.getFullYear();

export default function Footer() {
    return (
        <footer className="footer">
            <div className="itemsFooter">
                <p>&copy; {year} - Tiago Gonçalves</p>
            </div>
        </footer>
)
}