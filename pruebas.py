import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class LoginPage:
    def __init__(self, driver):  # Corregido: Doble guion bajo en "__init__"
        self.driver = driver

    def enter_username(self, username):
        username_field = self.driver.find_element(By.ID, "mui-1")
        username_field.clear()
        username_field.send_keys(username)

    def enter_password(self, password):
        password_field = self.driver.find_element(By.ID, "mui-2")
        password_field.clear()
        password_field.send_keys(password)

    def click_login_button(self):
        login_button = self.driver.find_element(By.ID, "mui-3")
        login_button.click()

class CustomerPage:
    def __init__(self, driver):  # Corregido: Doble guion bajo en "__init__"
        self.driver = driver

    def click_edit_button(self):
        edit_button = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/div/div[2]/div/div[2]/div[2]/div/div/div[1]/div[1]/div/div/button[1]'))
        )
        edit_button.click()

    def change_password(self, current_password, new_password, confirm_password):
        # Haz clic en el botón "Editar"
        self.click_edit_button()

        # Llena el formulario de cambio de contraseña
        current_password_field = self.driver.find_element(By.XPATH, '//*[@id="mui-144"]')
        current_password_field.clear()
        current_password_field.send_keys(current_password)

        new_password_field = self.driver.find_element(By.XPATH, '//*[@id="mui-145"]')
        new_password_field.clear()
        new_password_field.send_keys(new_password)

        confirm_password_field = self.driver.find_element(By.XPATH, '//*[@id="mui-146"]')
        confirm_password_field.clear()
        confirm_password_field.send_keys(confirm_password)

        # Haz clic en el botón "Enviar"
        submit_button = self.driver.find_element(By.XPATH, '/html/body/div[3]/div[3]/div/form/div[2]/button[2]')
        submit_button.click()

class TestFunctionalTests:
    def setup_method(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000/pagos_mykonos/login")

    def teardown_method(self):
        self.driver.quit()

    def test_login_and_create_customer(self):
        login_page = LoginPage(self.driver)
        login_page.enter_username("IS2@unsa.edu.com")
        login_page.enter_password("CSUNSA")
        login_page.click_login_button()

        customer_page = CustomerPage(self.driver)
        pagos_button = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/header/div/div/div[4]/button[3]'))
        )
        pagos_button.click()
        # Llena el formulario de cambio de contraseña
        customer_page.change_password("al71837159", "71837159", "71837159")

        # Realiza las verificaciones necesarias para asegurarte de que el cliente se haya actualizado correctamente

if __name__ == "__main__":  # Corregido: Doble guion bajo en "__main__"
    pytest.main()
