import Script from 'next/script';

const GoogleTranslator = () => {
    const initTranslate = () => {
        if (typeof window !== 'undefined' && window.google) {
            new window.google.translate.TranslateElement(
                { pageLanguage: 'en' },
                'google_translate_element'
            );
        }
    };

    return (
        <div>
            <div id="google_translate_element" className='w-20 border-2 rounded-md border-black h-5 font-bold overflow-hidden fixed z-50 bottom-10 left-5' />
            <Script
                src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                strategy="afterInteractive"
                onLoad={() => {
                    window.googleTranslateElementInit = initTranslate;
                }}
            />
        </div>
    );
};

export default GoogleTranslator;
