import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import TimeoutException
# Funciones de prueba
def test_mantenimiento():
    with webdriver.Chrome() as driver:
        driver.implicitly_wait(10)
        driver.get("http://localhost:3000/pagos_mykonos/login")
        driver.maximize_window()

        iniciar_sesion(driver, "IS2@unsa.edu.com", "CSUNSA")
        
        # ñamada a las funciones
        open_mantenimiento(driver)
        
        
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

def open_mantenimiento(driver):
    mantenimiento = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, './/*[@id="root"]/div/header/div/div/div[4]/button[6]/a'))
    )
    mantenimiento.click()
    editar_lote = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, './/*[@id="root"]/div/div/div/table/tbody/tr[1]/td[7]/button'))
    )
    editar_lote.click()
    precio = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, './/*[@id="precioEditarInput"]'))
    )
    precio.click()    
    precio.clear()
    valor_a_escribir = '250'
    precio.send_keys(valor_a_escribir)
    estado = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, './/*[@id="estadoEditarInput"]'))
    )
    estado.click()

    # Espera a que la opción "Vendido" sea clickable antes de intentar seleccionarla
    opcion_vendido = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, './/option[text()="Vendido"]'))
    )

    opcion_vendido.click()
    
    estado_cargar = WebDriverWait(driver, 20).until(
    EC.element_to_be_clickable((By.XPATH, './/*[@id="root"]/div/div/div/table/tbody/tr[1]/td[7]/button'))
    )
    estado_cargar.click()
    
    
if __name__ == "__main__":
    pytest.main()
