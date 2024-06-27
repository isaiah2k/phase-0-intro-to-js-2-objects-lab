const employee = {
    name: `Isaiah`, streetAddress: `123 Main St, Vacaville, CA`
}
const updateEmployeeWithKeyAndValue = (employee, key, value) => ({
...employee,[key]: value
})
const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value
    return employee
}
const deleteFromEmployeeByKey = (employee, key) => {
    const { [key]: _, ...newEmployee } = employee
    return newEmployee
}
const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key]
    return employee
}
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, `position`, `Manager`)