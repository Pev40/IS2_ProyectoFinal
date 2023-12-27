import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestPercentageCalculators:
    def setup_method(self):
        self.driver = webdriver.Chrome()
        self.driver.get("https://www.calculator.net/percent-calculator.html")

    def teardown_method(self):
        self.driver.quit()

    def perform_percentage_calculation(self, percent, total, expected_result):
        
        self.driver.find_element(By.ID, "cpar1").clear()
        self.driver.find_element(By.ID, "cpar1").send_keys(str(percent))
        self.driver.find_element(By.ID, "cpar2").clear()
        self.driver.find_element(By.ID, "cpar2").send_keys(str(total))
        self.driver.find_element(By.XPATH, '//*[@id="content"]/form[1]/table/tbody/tr[2]/td/input[2]').click()

        
        result_message_xpath = '/html/body/div[3]/div[1]/p[2]/font'
        WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.XPATH, result_message_xpath)))
        result1 = self.driver.find_element(By.XPATH, result_message_xpath).text
        if(result1 == 'Please provide two numeric values in any fields below.'):
            assert result1 == expected_result

        
        result_xpath = '//*[@id="content"]/p[2]/font/b'
        WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.XPATH, result_xpath)))

        
        result = self.driver.find_element(By.XPATH, result_xpath).text
        assert int(result) == expected_result

    @pytest.mark.parametrize("percent, total, expected_result", [
        # Casos de Clases de Equivalencia
        (10, 200, 20),
        (50, 100, 50),
        (0, 0, 0),
        (100, 500, 500),
        (-10, 200, -20), 
        (110, 200, 220), 
        ("ABC", 200, None),  
        (10, "XYZ", None),  
        
        
        # Casos de Valores Límite
        (0, 0, 0),
        (100, 1000, 1000),
        (-1, 200, -2),  
        (101, 200, 202), 
        ("ABC", 200, None),  
        (10, "XYZ", None)  
   
    ])
    def test_percentage_of_total(self, percent, total, expected_result):
        if expected_result is None:
            with pytest.raises(AssertionError):
                self.perform_percentage_calculation(percent, total, expected_result)
        else:
            self.perform_percentage_calculation(percent, total, expected_result)

if __name__ == "__main__":
    pytest.main()