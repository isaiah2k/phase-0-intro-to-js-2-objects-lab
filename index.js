//employee object
const employee = {
	name: `Isaiah`,
	streetAddress: `123 Main St, Vacaville, CA`
}
// Function to update an employee object non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
	// uses spread operator to copy all properties of the employee object and update the property with the specified key and value
	return {
		...employee,
		[key]: value
	}
}
// Function to update an employee object destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
		// updates original employee object
    return employee
}
// Function to delete a property from an employee object non-destructively
function deleteFromEmployeeByKey(employee, key) {
	// Creates a new object by spreading the properties of the original employee object
	const newEmployee = { ...employee }
	//deletes given key from new object
	delete newEmployee[key]
	// returns new object without key
	return newEmployee
}
// Function to delete a property from an employee object destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
	// Deletes the given key from the original employee object
	delete employee[key]
	// updates original employee object
	return employee
}