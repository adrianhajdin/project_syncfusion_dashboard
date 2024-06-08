from flask import Blueprint, request, jsonify
import json

customers_bp = Blueprint('customers', __name__, url_prefix='/customers')

def load_customers():
    with open('dummy_data/customer_info.json', 'r') as file:
        return json.load(file)

def save_customers(customers):
    with open('dummy_data/customer_info.json', 'w') as file:
        json.dump(customers, file, indent=4)

@customers_bp.route('/', methods=['GET'])
def get_customers():
    customers = load_customers()
    print("Getting data for customers")
    return jsonify(customers)

@customers_bp.route('/', methods=['POST'])
def add_customer():
    new_customer = request.json
    customers = load_customers()
    new_customer['id'] = max([customer['id'] for customer in customers]) + 1 if customers else 1
    customers.append(new_customer)
    save_customers(customers)
    print("adding data for customers")
    return jsonify(new_customer), 201

@customers_bp.route('/<int:customer_id>', methods=['DELETE'])
def delete_customer(customer_id):
    customers = load_customers()
    customer = next((customer for customer in customers if customer['id'] == customer_id), None)
    if customer is None:
        return jsonify({'message': 'Customer not found'}), 404
    customers.remove(customer)
    save_customers(customers)
    print("deleting data for a customer")

    return jsonify({'message': 'Customer deleted'})
