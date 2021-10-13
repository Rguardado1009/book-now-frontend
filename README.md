Final Project Pitch

Summary
- The goal of this project is to create an internal booking system for a recording studio. We do not want to be dependent on third party booking services such as square and Calendly
we want to facility users to be able to find all services and employees that work at this studio and make it easy to book and track booking.
 
User Story

- As a user I am able to visit website and view unauthenticated app.
- Unauthenticated app will have landing page, services and book now pages.

- As a user I can sign up or log in if I already have an account created
- As a user I can book services and select the date I want and the time available.
- As a user I can view my total cost of the services I am booking.
- As a user I can edit my booking time and service.
Can review services/employees
 
Stretch Goals
As a user I can be brought into a checkout page where I can pay for the services in advanced
As a user I will receive an email confirmation with all booking info
As an employee I can log in and view how many appointments I have pending. 



Technologies
-React.js
-Ruby on rails API
-Material UI
-Styled Components
	

wireframe 
https://www.figma.com/file/Zv5j36gIFFRPWekHqJJ9Up/Book-Now?node-id=0%3A1

https://app.asana.com/0/1201177606710171/board


Models and Relationships

Users

- has many appointments.
- has many services through appointments .
- has many employees through services.

Employees
- has many appointments.
- has many services.
- has many users through appointments.
- has many reviews through services.

Services
Belongs to employee.
- Has many appointments .
- Has many reviews.

Appointments
- Belongs to user.
- Belongs to service.

Reviews
- belongs to users.
- Belongs to service.

Components
- Navigation Bar
  - Book Now
  - Services
  - Sign Up
  - Log In
- Landing Page (Home) (“/”)
	-  < Nav Bar/>
	- Image centered
	- Additional Book Now Button with the same function as nav book now button
- Services (“/services”)
	- Grid of 4 services
		- Recording
		- Mixing
		- Mastering
		- Live Sound

- Individual Services (services/:id
	- Expanded view for:
		- Recording
			- Provide further details of service
		- Mixing
			- Provide further details of service
		- Mastering
			- Provide further details of service
		- Live sound
			- Provide further details of service
- Book Now (“/booking”)
	- Image slide show
	- Length of service selector
	- Space/engineer option
	- Submit button
	- Cancellation policy for selected service

Landing Page

- NAVIGATION BAR

	- Book Now Button
		- when this button is clicked it will redirect to the calendar/booking form.
	- Services Button
		- when this button is clicked i will be able to view a summary of all services the studio offers to clients.
	- Account
		- When this button is clicked it will bring me to users account where they can see detailed info.
	- Sign Up
		- when clicked it will bring me to the sign-up form
	- Sign in
		- when clicked it will bring me to the log in form. (possible oauth use)




