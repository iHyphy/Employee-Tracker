const inquirer = require('inquirer');

async function mainMenuPrompt() {
  return inquirer.prompt([
    {
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add a Department',
        'Add a Role',
        'Add an Employee',
        'Update an Employee Role',
        'Exit'
      ],
    },
  ]);
}

async function addDepartmentPrompt() {
  return inquirer.prompt([
    {
      name: 'name',
      type: 'input',
      message: 'What is the name of the department?',
    },
  ]);
}

async function addRolePrompt() {
  return inquirer.prompt([
    {
      name: 'title',
      type: 'input',
      message: 'What is the title of the role?',
    },
    {
      name: 'salary',
      type: 'input',
      message: 'What is the salary of the role?',
      validate: value => !isNaN(parseFloat(value)) || 'Please enter a number',
    },
    {
      name: 'department_id',
      type: 'input',
      message: 'What is the department ID this role belongs to?',
      validate: value => !isNaN(parseInt(value)) || 'Please enter a number',
    },
  ]);
}

async function addEmployeePrompt() {
  return inquirer.prompt([
    {
      name: 'first_name',
      type: 'input',
      message: 'What is the employee’s first name?',
    },
    {
      name: 'last_name',
      type: 'input',
      message: 'What is the employee’s last name?',
    },
    {
      name: 'role_id',
      type: 'input',
      message: 'What is the role ID for the employee?',
      validate: value => !isNaN(parseInt(value)) || 'Please enter a number',
    },
    {
      name: 'manager_id',
      type: 'input',
      message: 'What is the manager ID for the employee? (Leave blank if none)',
      validate: value => value === '' || !isNaN(parseInt(value)) || 'Please enter a number',
      filter: value => value === '' ? null : parseInt(value),
    },
  ]);
}

async function updateEmployeeRolePrompt() {
  return inquirer.prompt([
    {
      name: 'employee_id',
      type: 'input',
      message: 'Enter the ID of the employee whose role you want to update:',
      validate: value => !isNaN(parseInt(value)) || 'Please enter a number',
    },
    {
      name: 'new_role_id',
      type: 'input',
      message: 'Enter the new role ID for the employee:',
      validate: value => !isNaN(parseInt(value)) || 'Please enter a number',
    },
  ]);
}

module.exports = {
  mainMenuPrompt,
  addDepartmentPrompt,
  addRolePrompt,
  addEmployeePrompt,
  updateEmployeeRolePrompt,
};
