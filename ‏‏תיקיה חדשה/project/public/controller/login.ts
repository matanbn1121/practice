interface UserLogin{
    email: string;
    password: string;
}

function getValueLogin(): UserLogin | null {
    const form = document.getElementById('loginForm') as HTMLFormElement;

    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
        alert('אנא מלא את כל השדות');
        return null;
    }

    return { email, password };
}


 async function postFormLogin() {
    const userData = getValueLogin();
    if (!userData) return;

    try {
        const response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('❌ שגיאה בהתחברות');
        }

        const result = await response.json();
        alert('✅ התחברת בהצלחה!');
        console.log(result);
        window.location.href = 'home.html';

    } catch (error) {
        console.error(error);
        alert('❌ קרתה תקלה בעת שליחת הטופס');
    }
}

document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    postFormLogin();
});