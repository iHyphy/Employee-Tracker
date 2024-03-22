const {
  mainMenuPrompt,
  addDepartmentPrompt,
  addRolePrompt,
  addEmployeePrompt,
  updateEmployeeRolePrompt,
} = require('./src/prompts');

const {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require('./src/queries');

async function mainMenu() {
  try {
    const { action } = await mainMenuPrompt();
    switch (action) {
      case 'View All Departments':
        const departments = await viewAllDepartments();
        console.table(departments);
        break;
      case 'View All Roles':
        const roles = await viewAllRoles();
        console.table(roles);
        break;
      case 'View All Employees':
        const employees = await viewAllEmployees();
        console.table(employees);
        break;
      case 'Add a Department':
        const deptData = await addDepartmentPrompt();
        await addDepartment(deptData.name);
        console.log('Department added successfully!');
        break;
      case 'Add a Role':
        const roleData = await addRolePrompt();
        await addRole(roleData.title, roleData.salary, roleData.department_id);
        console.log('Role added successfully!');
        break;
      case 'Add an Employee':
        const employeeData = await addEmployeePrompt();
        await addEmployee(employeeData.first_name, employeeData.last_name, employeeData.role_id, employeeData.manager_id);
        console.log('Employee added successfully!');
        break;
      case 'Update an Employee Role':
        const updateData = await updateEmployeeRolePrompt();
        await updateEmployeeRole(updateData.employee_id, updateData.new_role_id);
        console.log('Employee role updated successfully!');
        break;
      case 'Exit':
        console.log('Exiting application.');
        process.exit();
    }
  } catch (error) {
    console.error('Error: ', error);
  } finally {
    // Ensure the prompt doesn't immediately reappear after executing an action
    setTimeout(mainMenu, 1000);
  }
}

mainMenu();
