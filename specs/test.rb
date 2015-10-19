require 'selenium-webdriver'
require 'rspec'

config = {
	host: 'http://localhost:5000'
}

describe "Scrolling events" do  
	
	before(:all) do  
		@driver = Selenium::WebDriver.for(:firefox)
		@driver.manage.window.maximize
		@driver.get(config[:host])
	end

	after(:all) do
		@driver.quit
	end

	it "should start autoplay" do
		@driver.switch_to.frame("banner")
		wait = Selenium::WebDriver::Wait.new(:timeout => 100)
		wait.until { @driver.find_element(:class => "button-pause") }
		sleep 2
		ct = @driver.execute_script("return $('video').get(0).currentTime")
		expect(ct).to be > 0
	end

	it "should have button-pause in iframe" do
		wait = Selenium::WebDriver::Wait.new(:timeout => 100)
		wait.until { @driver.find_element(:class => "button-pause") }
	end

	it "should have button-play in iframe when scroll under banner" do
		@driver.switch_to.default_content
		content = @driver.find_elements(:id => 'banner').first
		scroll = content.location.y + content.size.height
		@driver.execute_script("scroll(0,#{scroll})")
		@driver.switch_to.frame("banner")
		@driver.find_element(:class => "button-play")
	end

end






# driver.switch_to.frame("banner")