interface UserRegister {
    name: string;
    lastName: string;
    email: string;
    phone: number;
    password: string;
    address: string;
    city: string;
    zipCode: number;
  }
  
  function getValueForm(): UserRegister | null {
    const form = document.getElementById('registerForm') as HTMLFormElement;
  
    const name = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = Number(form.phone.value);
    const password = form.password.value;
    const address = form.address.value;
    const city = form.city.value;
    const zipCode = Number(form.zipCode.value);
  
    if (!name || !lastName || !email || !phone || !password || !address) {
      alert('אנא מלא את כל השדות');
      return null;
    }
  
    return { name, lastName, email, phone, password, address, zipCode, city };
  }
  
  async function postForm() {
    const userData = getValueForm();
    if (!userData) return; 
  
    try {
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
      });
  
      const result = await response.json(); 
  
      if (!response.ok) {
        throw new Error(`❌ שגיאה בהרשמה: ${result.message || 'אין הודעת שגיאה'}`);
      }
  
      alert('✅ נרשמת בהצלחה!');
      console.log(result); 
      window.location.href = './login.html'; 
  
    } catch (error) {
      console.error(error);
      alert(`❌ שגיאה בהרשמה: ${(error as Error).message}`);
    }
  }
  
  document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault(); 
      postForm();
    });