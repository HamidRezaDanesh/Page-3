// src/config/fonts.ts
// 🎨 سیستم فونت پیشرفته برای سایت شما

export const fontConfig = {
    // فونت‌های فارسی محبوب و زیبا
    persian: {
      primary: 'Vazirmatn',      // مدرن و خوانا
      secondary: 'IRANSansX',     // حرفه‌ای و رسمی
      display: 'Estedad',         // برای تیترها
      elegant: 'Sahel',           // ظریف و زیبا
      modern: 'Shabnam',          // مدرن و جذاب
    },
    
    // فونت‌های انگلیسی
    english: {
      primary: 'Inter',
      secondary: 'Poppins',
      display: 'Space Grotesk',   // برای تیترها
      mono: 'JetBrains Mono',     // برای کد
    },
    
    // فونت‌های سوئدی (استفاده از فونت‌های اروپایی)
    swedish: {
      primary: 'Inter',
      secondary: 'Work Sans',
    }
  };
  
  // وزن‌های مختلف فونت Vazirmatn
  export const vazirmatnWeights = {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  };
  
  // کلاس‌های Tailwind برای فونت‌ها
  export const fontClasses = {
    // Headers
    h1: 'font-display font-black tracking-tight',
    h2: 'font-display font-bold tracking-tight',
    h3: 'font-display font-semibold',
    
    // Body
    body: 'font-sans font-normal leading-relaxed',
    bodyBold: 'font-sans font-semibold',
    
    // Special
    code: 'font-mono text-sm',
    button: 'font-sans font-medium tracking-wide',
    badge: 'font-sans font-semibold tracking-wider uppercase text-xs',
  };
  
  // دستورات import برای فونت‌ها
  export const fontImports = `
  /* Vazirmatn - بهترین فونت فارسی */
  @import url('https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css');
  
  /* IRANSansX - فونت حرفه‌ای */
  @font-face {
    font-family: 'IRANSansX';
    src: url('/fonts/IRANSansX-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
  /* Estedad - فونت مدرن برای تیترها */
  @import url('https://cdn.jsdelivr.net/gh/aminabedi68/Estedad@v5.0.1/estedad.min.css');
  
  /* Inter - فونت انگلیسی */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  
  /* Poppins - فونت انگلیسی برای تنوع */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
  
  /* Space Grotesk - برای عناوین انگلیسی */
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
  
  /* JetBrains Mono - برای نمایش کد */
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
  `;