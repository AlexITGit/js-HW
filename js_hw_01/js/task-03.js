const ADMIN_PASSWORD = String('adminpass')
let message = String('')
let result = prompt('Ведите пароль', '')

if (result) {
    result === ADMIN_PASSWORD ? message = 'Добро пожаловать!' : message = 'Доступ запрещен, неверный пароль!'
    }
    else message = 'Отменено пользователем'
alert(message)