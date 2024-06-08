from flask import Blueprint, request, jsonify
import json

orders_bp = Blueprint('orders', __name__, url_prefix='/orders')

def load_orders():
    with open('dummy_data/orders_data.json', 'r') as file:
        return json.load(file)

def save_orders(orders):
    with open('dummy_data/orders_data.json', 'w') as file:
        json.dump(orders, file, indent=4)

@orders_bp.route('/', methods=['GET'])
def get_orders():
    orders = load_orders()
    print("getting data for orders")
    return jsonify(orders)

@orders_bp.route('/', methods=['POST'])
def add_order():
    new_order = request.json
    orders = load_orders()
    new_order['id'] = max([order['id'] for order in orders]) + 1 if orders else 1
    orders.append(new_order)
    save_orders(orders)
    print("adding orders")
    return jsonify(new_order), 201

@orders_bp.route('/<int:order_id>', methods=['DELETE'])
def delete_order(order_id):
    orders = load_orders()
    order = next((order for order in orders if order['id'] == order_id), None)
    if order is None:
        return jsonify({'message': 'Order not found'}), 404
    orders.remove(order)
    save_orders(orders)
    print("deleting an order")
    return jsonify({'message': 'Order deleted'})
