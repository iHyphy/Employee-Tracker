const connection = require('../db/connections');

const viewAllDepartments = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM department';
    connection.query(query, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const viewAllRoles = () => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT role.id, role.title, department.name AS department, role.salary
      FROM role
      JOIN department ON role.department_id = department.id`;
    connection.query(query, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const viewAllEmployees = () => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, 
      CONCAT(manager.first_name, ' ', manager.last_name) AS manager
      FROM employee
      LEFT JOIN employee manager ON employee.manager_id = manager.id
      JOIN role ON employee.role_id = role.id
      JOIN department ON role.department_id = department.id`;
    connection.query(query, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const addDepartment = (name) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO department (name) VALUES (?)';
    connection.query(query, [name], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

const addRole = (title, salary, department_id) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
    connection.query(query, [title, salary, department_id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

const addEmployee = (first_name, last_name, role_id, manager_id) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
    connection.query(query, [first_name, last_name, role_id, manager_id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

const updateEmployeeRole = (employee_id, new_role_id) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
    connection.query(query, [new_role_id, employee_id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
