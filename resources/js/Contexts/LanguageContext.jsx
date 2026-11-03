import { useState, useEffect } from 'react';
import { translations } from '../utils/translations';

export const useLanguage = () => {
    // Load saved language from browser, default to EN
    const [currentLang, setCurrentLang] = useState(() => {
        return localStorage.getItem('ameda_lang') || 'EN';
    });

    // Listen for language changes globally
    useEffect(() => {
        const handleLangChange = (e) => setCurrentLang(e.detail);
        window.addEventListener('ameda_lang_change', handleLangChange);
        return () => window.removeEventListener('ameda_lang_change', handleLangChange);
    }, []);

    // Function to change language and trigger global update
    const changeLanguage = (code) => {
        localStorage.setItem('ameda_lang', code);
        window.dispatchEvent(new CustomEvent('ameda_lang_change', { detail: code }));
    };

    // Translation function
    const t = (key) => {
        return translations[currentLang]?.[key] || translations['EN']?.[key] || key;
    };

    return { currentLang, changeLanguage, t };
};