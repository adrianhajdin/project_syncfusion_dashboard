from flask import Blueprint, request, jsonify
import json

employees_bp = Blueprint('employees', __name__, url_prefix='/employees')

def load_employees():
    with open('dummy_data/employee_info.json', 'r') as file:
        return json.load(file)

def save_employees(employees):
    with open('dummy_data/employee_info.json', 'w') as file:
        json.dump(employees, file, indent=4)

@employees_bp.route('/', methods=['GET'])
def get_employees():
    employees = load_employees()
    print("getting data for emplyees")
    return jsonify(employees)

@employees_bp.route('/', methods=['POST'])
def add_employee():
    new_employee = request.json
    employees = load_employees()
    new_employee['id'] = max([employee['id'] for employee in employees]) + 1 if employees else 1
    employees.append(new_employee)
    save_employees(employees)
    print("adding data for employees")
    return jsonify(new_employee), 201

@employees_bp.route('/<int:employee_id>', methods=['DELETE'])
def delete_employee(employee_id):
    employees = load_employees()
    employee = next((employee for employee in employees if employee['id'] == employee_id), None)
    if employee is None:
        return jsonify({'message': 'Employee not found'}), 404
    employees.remove(employee)
    save_employees(employees)
    print("deleting an employee data")
    return jsonify({'message': 'Employee deleted'})
