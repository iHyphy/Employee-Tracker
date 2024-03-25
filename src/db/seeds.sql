USE employees_db;

-- Insert departments
INSERT INTO department (name) VALUES 
('Engineering'),
('Finance'),
('Human Resources');

-- Insert roles
-- Note: Adjust department_id based on the departments you've added above
INSERT INTO role (title, salary, department_id) VALUES 
('Software Engineer', 80000, 1),
('Senior Software Engineer', 100000, 1),
('Accountant', 75000, 2),
('HR Manager', 85000, 3);

-- Insert employees
-- Note: Adjust role_id for accurate references to the role table
-- manager_id is set to NULL for simplicity; adjust as needed
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Doe', 1, NULL),
('Jane', 'Doe', 2, NULL),
('Jim', 'Beam', 3, NULL),
('Jack', 'Daniels', 4, NULL);

-- Optionally, update some employees to have a manager
UPDATE employee SET manager_id = 1 WHERE id IN (2, 3, 4);
