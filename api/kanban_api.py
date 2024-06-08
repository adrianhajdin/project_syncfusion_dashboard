from flask import Blueprint, request, jsonify
import json

kanban_bp = Blueprint('kanban', __name__, url_prefix='/kanban')

def load_kanban():
    with open('dummy_data/kanban_data.json', 'r') as file:
        return json.load(file)

def save_kanban(kanban_tasks):
    with open('dummy_data/kanban_data.json', 'w') as file:
        json.dump(kanban_tasks, file, indent=4)

@kanban_bp.route('/', methods=['GET'])
def get_kanban_tasks():
    kanban_tasks = load_kanban()
    print("getting data for Kanban")
    return jsonify(kanban_tasks)

@kanban_bp.route('/', methods=['POST'])
def add_kanban_task():
    new_task = request.json
    kanban_tasks = load_kanban()
    new_task['id'] = max([task['id'] for task in kanban_tasks]) + 1 if kanban_tasks else 1
    kanban_tasks.append(new_task)
    save_kanban(kanban_tasks)
    print("adding data for kanban")
    return jsonify(new_task), 201

@kanban_bp.route('/<int:task_id>', methods=['DELETE'])
def delete_kanban_task(task_id):
    kanban_tasks = load_kanban()
    task = next((task for task in kanban_tasks if task['id'] == task_id), None)
    if task is None:
        return jsonify({'message': 'Task not found'}), 404
    kanban_tasks.remove(task)
    save_kanban(kanban_tasks)
    print("deleting data for Kanban")
    return jsonify({'message': 'Task deleted'})
