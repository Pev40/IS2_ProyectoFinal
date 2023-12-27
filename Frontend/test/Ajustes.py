import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Funciones de prueba
def test_ajustes():
    with webdriver.Chrome() as driver:
        driver.implicitly_wait(10)
        driver.get("http://localhost:3000/pagos_mykonos/login")
        driver.maximize_window()

        iniciar_sesion(driver, "IS2@unsa.edu.com", "CSUNSA")

        # ñamada a las funciones
        open_ajustes(driver)
        resultados_ajustes(driver)
        
        # Agrega aserciones o verificaciones relevantes 
        assert "Gestor de Pagos" in driver.title
        
        
        
def iniciar_sesion(driver, usuario, contraseña):
    # Simulación de inicio de sesión (puedes adaptar esto a tu propio formulario de inicio de sesión)
    username_field = driver.find_element(By.NAME, "email")
    password_field = driver.find_element(By.NAME, "Password")

    # Ingresa tus credenciales aquí
    username_field.send_keys(usuario)
    password_field.send_keys(contraseña)

    # Hacer clic en el botón de inicio de sesión (ajusta el selector según tu formulario)
    login_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id="mui-3"]'))
    )
    login_button.click()

def open_ajustes(driver):
    ajustes = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, './/*[@id="root"]/div/header/div/div/div[4]/button[4]/a'))
    )
    ajustes.click()
    cambio = WebDriverWait(driver, 20).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/div/form/div/input'))
    )
    cambio.click()
    cambio.clear()
    valor_a_escribir = '3.8923'
    cambio.send_keys(valor_a_escribir)
    enviar = WebDriverWait(driver, 20).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/div/form/button'))
    )
    enviar.click()
def resultados_ajustes(driver):
        resultado_esperado = "Se realizo correctamente el tipo de cambio"  # Reemplaza con el valor esperado
        elemento_resultado = WebDriverWait(driver, 30).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="root"]/div/div[2]/div/div[2]'))
        )
        resultado_obtenido = elemento_resultado.text  # Puedes utilizar .get_attribute("value") si es un input
        assert resultado_obtenido == resultado_esperado, f"El resultado obtenido ({resultado_obtenido}) no coincide con el esperado ({resultado_esperado})"
        
        
if __name__ == "__main__":
    pytest.main()
