import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Funciones de prueba
def test_proyecciones():
    with webdriver.Chrome() as driver:
        driver.implicitly_wait(10)
        driver.get("http://localhost:3000/pagos_mykonos/login")
        driver.maximize_window()

        iniciar_sesion(driver, "IS2@unsa.edu.com", "CSUNSA")

        # ñamada a las funciones
        open_proyecciones_desde(driver)
        open_proyecciones_hasta(driver)
        
        resultados_proyecciones(driver)
        
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

def open_proyecciones_desde(driver):
    proyecciones = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, './/*[@id="root"]/div[1]/header[1]/div[1]/div[1]/div[4]/button[5]/a[1]'))
    )
    proyecciones.click()
    desde_anio = WebDriverWait(driver, 20).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id="mui-component-select-demo-simple-select"]'))
    )
    desde_anio.click()
    segunda_opcion = WebDriverWait(driver, 20).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id="menu-demo-simple-select"]/div[3]/ul[1]/li[5]'))
    )
    segunda_opcion.click()
    desde_mes = WebDriverWait(driver, 20).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id="demo-simple-select"]'))
    )
    desde_mes.click()
    segunda_opcion2 = WebDriverWait(driver, 20).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id="menu-"]/div[3]/ul[1]/li[8]'))
    )
    segunda_opcion2.click()
    
def open_proyecciones_hasta(driver):
        hasta_anio = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((By.ID, 'demo-simple-select-2'))
        )
        hasta_anio.click()
        segunda_opcion_hasta = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="menu-"]/div[3]/ul[1]/li[7]'))
        )
        segunda_opcion_hasta.click()    
        hasta_mes = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((By.ID, 'demo-simple-select-3'))
        )
        hasta_mes.click()
        segunda_opcion_mes = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="menu-"]/div[3]/ul[1]/li[11]'))
        )
        segunda_opcion_mes.click() 

def resultados_proyecciones(driver):
        resultado_esperado = "1271727"  # Reemplaza con el valor esperado
        elemento_resultado = WebDriverWait(driver, 30).until(
            EC.visibility_of_element_located((By.ID, 'total-soles'))
        )
        resultado_obtenido = elemento_resultado.text  # Puedes utilizar .get_attribute("value") si es un input
        assert resultado_obtenido == resultado_esperado, f"El resultado obtenido ({resultado_obtenido}) no coincide con el esperado ({resultado_esperado})"
        
        # Funciones auxiliares
        resultado_esperado2 = "106158"  # Reemplaza con el valor esperado
        elemento_resultado = WebDriverWait(driver, 30).until(
            EC.visibility_of_element_located((By.ID, 'total-dolares'))
        )
        resultado_obtenido2 = elemento_resultado.text  # Puedes utilizar .get_attribute("value") si es un input

        assert resultado_obtenido2 == resultado_esperado2, f"El resultado obtenido ({resultado_obtenido2}) no coincide con el esperado ({resultado_esperado2})"
                

if __name__ == "__main__":
    pytest.main()
