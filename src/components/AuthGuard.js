/**
 * AuthGuard: حساس سروسز کے لیے سیکیورٹی لیئر
 */
export const AuthGuard = (callback) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // چیک کریں کہ کیا یوزر لاگ ان ہے

    if (isLoggedIn) {
        callback(); // اگر لاگ ان ہے تو سروس کھولیں
    } else {
        alert('براہ کرم اس سروس کو استعمال کرنے کے لیے پہلے لاگ ان کریں۔');
        window.location.href = '/login.html'; // لاگ ان پیج پر ری ڈائریکٹ کریں
    }
};
