import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class LoginPage:
    def _init_(self, driver):
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
    def _init_(self, driver):
        self.driver = driver

class TestFunctionalTests:
    def setup_method(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000/pagos_mykonos/login")  # Reemplaza con la URL correcta de inicio de sesión

    def teardown_method(self):
        self.driver.quit()

    def test_login_and_create_customer(self):
        login_page = LoginPage(self.driver)
        login_page.enter_username("IS2@unsa.edu.com")
        login_page.enter_password("CSUNSA")
        login_page.click_login_button()
        pagos_button = WebDriverWait(self.driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/header/div/div/div[4]/button[2]'))
        )
        pagos_button.click()
        exportar_button = WebDriverWait(self.driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@id="exportar"]'))
        )
        exportar_button.click()



        # Realiza las verificaciones necesarias para asegurarte de que el cliente se haya creado correctamente


if _name_ == "_main_":
    pytest.main()