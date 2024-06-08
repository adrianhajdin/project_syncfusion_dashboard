from flask import Blueprint, request, jsonify
import json

schedules_bp = Blueprint('schedules', __name__, url_prefix='/schedules')

def load_schedules():
    with open('dummy_data/schedule_data.json', 'r') as file:
        return json.load(file)

def save_schedules(schedules):
    with open('dummy_data/schedule_data.json', 'w') as file:
        json.dump(schedules, file, indent=4)

@schedules_bp.route('/', methods=['GET'])
def get_schedules():
    schedules = load_schedules()
    print("getting data for schedules")
    return jsonify(schedules)

@schedules_bp.route('/', methods=['POST'])
def add_schedule():
    new_schedule = request.json
    schedules = load_schedules()
    new_schedule['id'] = max([schedule['id'] for schedule in schedules]) + 1 if schedules else 1
    schedules.append(new_schedule)
    save_schedules(schedules)
    print("adding data for schedules")
    return jsonify(new_schedule), 201

@schedules_bp.route('/<int:schedule_id>', methods=['DELETE'])
def delete_schedule(schedule_id):
    schedules = load_schedules()
    schedule = next((schedule for schedule in schedules if schedule['id'] == schedule_id), None)
    if schedule is None:
        return jsonify({'message': 'Schedule not found'}), 404
    schedules.remove(schedule)
    save_schedules(schedules)
    print("deleting schedules data")
    return jsonify({'message': 'Schedule deleted'})
