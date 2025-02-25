async function getUserDetails() {
  const userNameElementHeader = document.getElementById('userHeaderName') as HTMLElement; 
  const userNameElement = document.getElementById('name') as HTMLElement;
  const lastNameElement = document.getElementById('lastName') as HTMLElement;
  const phoneElement = document.getElementById('phone') as HTMLElement;
  const emailElement = document.getElementById('email') as HTMLElement;
  const addressElement = document.getElementById('address') as HTMLElement;
  const homeElement = document.getElementById('city') as HTMLElement;
  const zipCodeElement = document.getElementById('zip') as HTMLElement;

  try {
    const response = await fetch("http://localhost:5000/users/home", {
      method: 'GET',
      credentials: 'include', 
    });

    if (!response.ok) {
      throw new Error('⛔ יש להתחבר כדי להיכנס לעמוד זה');
    }

    const { name, lastName, phone, email, address } = await response.json();

    userNameElementHeader.textContent = name;
    userNameElement.textContent = `שם פרטי: ${name}`;
    lastNameElement.textContent = `שם משפחה: ${lastName}`;
    phoneElement.textContent = `טלפון: ${phone}`;
    emailElement.textContent = `אימייל: ${email}`;

    if (address) {
      addressElement.textContent = `כתובת: ${address.address}`;
      homeElement.textContent = `עיר: ${address.city}`;
      zipCodeElement.textContent = `מיקוד: ${address.zipCode}`;
    } else {
      addressElement.textContent = "כתובת: לא נמצאה";
      homeElement.textContent = "עיר: לא נמצאה";
      zipCodeElement.textContent = "מיקוד: לא נמצא";
    }

  } catch (error) {
    console.error(error);
    alert('⛔ לא מחובר. אנא התחבר מחדש.');
    window.location.href = 'login.html';
  }
}

async function logout() {
  try {
    const response = await fetch('http://localhost:5000/auth/logout', {
      method: 'POST',
      credentials: 'include',  
    });

    if (!response.ok) {
      throw new Error('❌ שגיאה בהתנתקות');
    }

    alert('✅ התנתקת בהצלחה!');
    window.location.href = 'login.html';

  } catch (error) {
    console.error(error);
    alert('❌ תקלה בהתנתקות');
  }
}

document.getElementById('logOut')?.addEventListener('click', logout);
window.addEventListener('DOMContentLoaded', getUserDetails);
