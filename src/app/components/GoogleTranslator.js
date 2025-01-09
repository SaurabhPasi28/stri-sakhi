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
            <div id="google_translate_element" className='w-32 border-2 bg-white rounded-md border-black h-7 font-bold overflow-hidden relative z-50 top-2  sm:right-10' />
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


