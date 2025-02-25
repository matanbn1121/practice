var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
function getUserDetails() {
    return __awaiter(this, void 0, void 0, function () {
        var userNameElementHeader, userNameElement, lastNameElement, phoneElement, emailElement, addressElement, homeElement, zipCodeElement, response, _a, name, lastName, phone, email, address, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    userNameElementHeader = document.getElementById('userHeaderName');
                    userNameElement = document.getElementById('name');
                    lastNameElement = document.getElementById('lastName');
                    phoneElement = document.getElementById('phone');
                    emailElement = document.getElementById('email');
                    addressElement = document.getElementById('address');
                    homeElement = document.getElementById('city');
                    zipCodeElement = document.getElementById('zip');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("http://localhost:5000/users/home", {
                            method: 'GET',
                            credentials: 'include'
                        })];
                case 2:
                    response = _b.sent();
                    if (!response.ok) {
                        throw new Error('⛔ יש להתחבר כדי להיכנס לעמוד זה');
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    _a = _b.sent(), name = _a.name, lastName = _a.lastName, phone = _a.phone, email = _a.email, address = _a.address;
                    userNameElementHeader.textContent = name;
                    userNameElement.textContent = "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9: " + name;
                    lastNameElement.textContent = "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4: " + lastName;
                    phoneElement.textContent = "\u05D8\u05DC\u05E4\u05D5\u05DF: " + phone;
                    emailElement.textContent = "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC: " + email;
                    if (address) {
                        addressElement.textContent = "\u05DB\u05EA\u05D5\u05D1\u05EA: " + address.address;
                        homeElement.textContent = "\u05E2\u05D9\u05E8: " + address.city;
                        zipCodeElement.textContent = "\u05DE\u05D9\u05E7\u05D5\u05D3: " + address.zipCode;
                    }
                    else {
                        addressElement.textContent = "כתובת: לא נמצאה";
                        homeElement.textContent = "עיר: לא נמצאה";
                        zipCodeElement.textContent = "מיקוד: לא נמצא";
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _b.sent();
                    console.error(error_1);
                    alert('⛔ לא מחובר. אנא התחבר מחדש.');
                    window.location.href = 'login.html';
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function logout() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch('http://localhost:5000/auth/logout', {
                            method: 'POST',
                            credentials: 'include'
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('❌ שגיאה בהתנתקות');
                    }
                    alert('✅ התנתקת בהצלחה!');
                    window.location.href = 'login.html';
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    alert('❌ תקלה בהתנתקות');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
(_a = document.getElementById('logOut')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', logout);
window.addEventListener('DOMContentLoaded', getUserDetails);
